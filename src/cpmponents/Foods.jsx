import React from "react";
import { foodlist } from "../../public/foodlist";
import { FaStar } from "react-icons/fa6";


const Foods = () => {
  return (
    <>
      {foodlist.map((food, id) => {
        return (
          <div key={id} className="food-container">
            <div className="food-container-image-div">
              <img src={food.image || "download.png"} alt="imaga" />
              {food.discount && (
                <div className="food-container-discount">
                  <span>{food.discount}%</span>
                </div>
              )}
              {food.rating && (
                <div className="food-container-rating">
                  {" "}
                  <span>
                    <FaStar className="star" /> {food.rating}
                  </span>
                </div>
              )}
            </div>
            <div className="food-container-details">
              <h3>{food.title }</h3>
              <p>{food.description}</p>
              <h3 className="food-container-details-price">${food.price}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Foodlist = () => {
  return (
    <div className="foodcontainer-wrapper">
      <Foods />
    </div>
  );
};

export default Foodlist;
