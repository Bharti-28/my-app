import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

const HomePage = () => {
    return (
    <>
      <div className="container mx-auto px-4 my-3">
        <h1 className="text-2xl font-bold text-gray-800">The Best of Entertainment</h1>
        <EntertainmentCardSlider />
      </div>
    </>
    );
};

export default HomePage;