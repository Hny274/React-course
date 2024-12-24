import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.id}
          className="flex p-2 m-2 border-gray-200 border-b-2 text-left justify-between"
        >
          <div className="p-2 w-9/12">
            <div className="p-2 ">
              <span>{item.card.info.name}</span>
              <span>
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs ">{item.card.info.description}</p>
          </div>
          <div className="p-2 w-3/12">
            <div className="absolute  ">
              <button className="p-2 mx-10 my-24 bg-green-400 rounded-lg border-black">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-30"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;