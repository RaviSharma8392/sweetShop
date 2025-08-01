import React from "react";
import Header from "../components/Header";
import PopularMithaiCollection from "../components/PupulatCollection";
import LocationInfo from "../components/LocationInfo";
import ReviewCardPremium from "../components/ReviewCard";
import ContactSectionPremium from "../components/Contact";
import AboutUs from "../components/About";
// import ReviewList, { ReviewCard } from "../components/ReviewList";

const HomePage = () => {
  return (
    <div>
      <Header />
      <PopularMithaiCollection />
      {/* <ReviewList /> */}
      <ReviewCardPremium />
      <LocationInfo />
      <AboutUs />
      {/* <ContactSectionPremium /> */}
    </div>
  );
};

export default HomePage;
