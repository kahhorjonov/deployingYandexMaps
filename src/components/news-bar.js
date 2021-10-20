import "../styles/news-bar.css";
import data from "./table-data.json";
import imgs from "../assets/picture.jpg";
import { Carousel } from "react-bootstrap";

function News1(props) {
  // const imgs = props.table.image;
  return (
    <div className="news1 m-1">
      <img src={imgs} />
      <h2>Yo'l {props.table.statusi.toLowerCase()}</h2>
      <h3>
        {props.table.nomi +
          " ko'chasining " +
          props.table.uzunligi +
          " qismi " +
          props.table.statusi.toLowerCase()}
      </h3>
      <a href="../newstemplate">Batafsil...</a>
    </div>
  );
}

function NewsBar() {
  let intervalTime = 4000;
  return (
    <div className="newsBarBody">
      <div className="newsContainer">
        <h1>So'ngi yangiliklar</h1>
        <Carousel className="w-120 h-50">
          <Carousel.Item interval={intervalTime}>
            <div className="news justify-content-center">
              <News1 table={data[data.length - 1]} />
              <News1 table={data[data.length - 2]} />
              <News1 table={data[data.length - 3]} />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={intervalTime}>
            <div className="news justify-content-center">
              <News1 table={data[data.length - 4]} />
              <News1 table={data[data.length - 5]} />
              <News1 table={data[data.length - 6]} />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default NewsBar;
