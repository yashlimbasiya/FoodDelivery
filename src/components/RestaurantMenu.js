import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_src } from "./constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  //   how to read the dynamic url
  const { resid } = useParams();

  const [restaurants, resmenu] = useRestaurant(resid); // CUSTOM HOOK

  const { name, avgRating, cloudinaryImageId, city, costForTwoMessage } =
    restaurants;

  const dispatch = useDispatch();
  const handleAddItems = () => {
    dispatch(addItem("Grapes"));
  };

  const handleItems = (card) =>{
      dispatch(addItem(card))
  }

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div>
        <h1> Res-ID : {resid} </h1>
        <h2> {name} </h2>
        <img className="item-img" src={img_src + cloudinaryImageId} />
        <h2> {city} </h2>
        <h2> {costForTwoMessage} </h2>
        <h2> {avgRating} </h2>
        <button onClick={() => handleAddItems()}>Add Item</button>
      </div>
      <div className="res-menu">
        <h2>
          {" "}
          Menu
          {resmenu?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
            (card) => {
              return (
                <li key={card?.card?.info.id}>{card?.card?.info?.name} -<button onClick={()=>handleItems(card.card.info)}>Add</button> </li>
              );
            }
          )}
        </h2>
      </div>
    </div>
  );
};

export default RestaurantMenu;
