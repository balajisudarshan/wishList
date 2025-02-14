import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [wishList, setWishList] = useState(() => {
    const savedWishList = localStorage.getItem("wishList");
    return savedWishList ? JSON.parse(savedWishList) : [];
  });

  const [newWish, setNewWish] = useState("");

  const addWish = () => {
    if (newWish.trim() !== "") {
      const updatedList = [...wishList, newWish];
      setWishList(updatedList);
      setNewWish("");
    }
  };

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full ">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Wish List
        </h1>
        <div className="wishList">
          <h1 className="text-xl text-gray-700 mb-4">
            Total Wish List: {wishList.length}
          </h1>
          <div className="inputs flex space-x-2">
            <input
              type="text"
              onChange={(e) => setNewWish(e.target.value)}
              placeholder="Enter Wish"
              className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={addWish}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <ul className="p-6 backdrop-blur-3xl bg-amber-300 rounded-lg shadow-xl mt-6 w-100">
        {wishList.map((wish, index) => (
          <li key={index} className="bg-gray-300 py-2 my-3 rounded-lg text-gray-700">
            {wish}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
