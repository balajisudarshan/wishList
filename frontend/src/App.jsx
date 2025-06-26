import React from "react";
import "./App.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainNavigation from "./components/MainNavigation";
import axios from "axios";
const getAllRecipes = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/recipes");
    console.log(res.data)
    return res.data;
  } catch (err) {
    throw new Response("Failed to fetch recipes" + err, { status: 500 });
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [{ path: "/", element: <Home />, loader: getAllRecipes }],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
