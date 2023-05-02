


import { img_src } from "./constants";


const FoodCard = ({ name,
    description, imageId , price }) => {
    
    
        return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src= { img_src +  imageId } 
        />
      <h3>{name}</h3>
      <h4>{description}</h4>
      <h4>Rs.{price/100}</h4>
      
      
    </div>
  );
};

export default FoodCard
