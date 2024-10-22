import { CDN_URL } from "../utils/constants";

const RestroCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minute</h4>
    </div>
  );
};

export default RestroCard;
