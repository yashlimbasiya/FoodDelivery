import { img_src } from "./constants";


const RestaurantCard = (props) => {
    const {resData}= props;
    const { name,
    cuisines, avgRating , costForTwoString , deliveryTime } = resData?.data
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={ img_src+  resData.data.cloudinaryImageId} 
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwoString}</h4>
      <h4>{deliveryTime} minutes</h4>
      
    </div>
  );
};

export default RestaurantCard;


