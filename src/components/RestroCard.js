import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestroCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200 ">
      <img
        className="rounded-lg h-[200px] w-[240px]"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minute</h4>
      <h4>{loggedInUser} </h4>
    </div>
  );
};

export default RestroCard;
