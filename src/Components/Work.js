import React from "react";
import PickMeals from "../Assets/Numbers 1.png";
import ChooseMeals from "../Assets/Numbers 2.png";
import DeliveryMeals from "../Assets/Numbers 3.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "$9.99/month",
      text: "Basic gym access to all strength and cardio equipment.",
    },
    {
      image: ChooseMeals,
      title: "$14.99/month",
      text: "Includes basic access PLUS pool and sauna access. ",
    },
    {
      image: DeliveryMeals,
      title: "$19.99/month",
      text: "Includes gym, pool, sauna PLUS unlimited group training. ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Memberships</p>
        <h1 className="primary-heading">What We Offer!</h1>
        <p className="primary-text">
          Choose the membership right for you!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
