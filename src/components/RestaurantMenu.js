import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_src } from "./constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurants, setRestaurants] = useState([{}]);
  const [resmenu, setResMenu] = useState([{}]);
  
  useEffect(() => {
    getRestaurantsID();
  }, []);
  const { id,name, avgRating, cloudinaryImageId, city, costForTwoMessage } =
    restaurants;

  // how to read the dynamic url
  const { resid } = useParams();
  // console.log(param);


  async function getRestaurantsID() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId="+resid+"&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(json.data?.cards[0]?.card?.card?.info);  //47589
    console.log(restaurants);
    setResMenu(json.data?.cards[2]);
    // console.log(resmenu);
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
      </div>
      <div className="res-menu">
        <h2>
          {" "}
          Menu
          {resmenu?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
            (card) => {
              return <li key={card?.card?.info.id}>{card?.card?.info?.name} </li>;
            }
          )}
        </h2>
      </div>
    </div>
  );
};

export default RestaurantMenu;
