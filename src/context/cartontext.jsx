import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useRef,
} from "react";

const CartContext = createContext();
const STORAGE_KEY = "sweet_box_cart";

const initialState = { items: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { id, name, variantLabel, unitPrice, weightLabel, image } =
        action.payload;
      const existingIndex = state.items.findIndex(
        (it) => it.id === id && it.variantLabel === variantLabel
      );
      if (existingIndex !== -1) {
        const items = [...state.items];
        items[existingIndex].quantity += 1;
        return { ...state, items };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            id,
            name,
            variantLabel,
            unitPrice,
            quantity: 1,
            weightLabel,
            image,
          },
        ],
      };
    }
    case "REMOVE_ITEM": {
      const { id, variantLabel } = action.payload;
      return {
        ...state,
        items: state.items.filter(
          (it) => !(it.id === id && it.variantLabel === variantLabel)
        ),
      };
    }
    case "UPDATE_QUANTITY": {
      const { id, variantLabel, quantity } = action.payload;
      if (quantity < 1) return state;
      const items = state.items.map((it) => {
        if (it.id === id && it.variantLabel === variantLabel) {
          return { ...it, quantity };
        }
        return it;
      });
      return { ...state, items };
    }
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "SET_STATE":
      return action.payload;
    default:
      return state;
  }
}

const safeParse = (str) => {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const saveTimeout = useRef(null);

  // hydrate
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = safeParse(stored);
      if (parsed && Array.isArray(parsed.items)) {
        dispatch({ type: "SET_STATE", payload: parsed });
      }
    }
  }, []);

  // persist with debounce
  useEffect(() => {
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {}
    }, 300);
    return () => {
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
    };
  }, [state]);

  const addToCart = ({
    id,
    name,
    variantLabel,
    unitPrice,
    weightLabel,
    image,
  }) =>
    dispatch({
      type: "ADD_ITEM",
      payload: { id, name, variantLabel, unitPrice, weightLabel, image },
    });

  const removeFromCart = (id, variantLabel) =>
    dispatch({ type: "REMOVE_ITEM", payload: { id, variantLabel } });

  const updateQuantity = (id, variantLabel, quantity) =>
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, variantLabel, quantity },
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const total = state.items.reduce(
    (sum, it) => sum + it.unitPrice * it.quantity,
    0
  );

  const buildWhatsAppMessage = () => {
    if (state.items.length === 0) return "";
    let lines = ["*New Sweet Box Order:*"];
    state.items.forEach((it) => {
      lines.push(
        `${it.name} (${it.variantLabel}) x${it.quantity} = ₹${
          it.unitPrice * it.quantity
        }`
      );
    });
    lines.push(`*Total: ₹${total}*`);
    return encodeURIComponent(lines.join("\n"));
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        buildWhatsAppMessage,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
