import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import NewsBar from "../components/news-bar";
import Uzbmapsvg from "../components/uzbmapsvg";

function home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <Uzbmapsvg />
      </div>
      <NewsBar />
    </div>
  );
}
export default home;
