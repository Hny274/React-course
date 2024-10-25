import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setMenuInfo(json.data);
  };

  if (menuInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    menuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      <h1>Name of the Restaurants</h1>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
