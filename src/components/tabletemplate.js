import React from "react";
import "../styles/tabletemplate.css";
import Image from "../assets/picture.jpg";
import data from "./table-data.json";

function tabletemplate(props) {
  console.log("props = ", props);

  // console.log("Obj: ", props.location.state.comp.nomi);

  return (
    <div className="datatable">
      <h1>Datatable tamplata</h1>

      <div className="template">
        <img src={Image} />
        <div className="information">
          <div className="card name">
            <h3 className="title">Yo'lning nomi</h3>
            <h2 className="subtitle">{props.location.state.comp.nomi}</h2>
          </div>
          <div className="card status">
            <h3 className="title">Yo'lning statusi</h3>
            <h2 className="subtitle">{props.location.state.comp.statusi}</h2>
          </div>
          <div className="card masofa">
            <h3 className="title">Ta`mirlanayotkan yolni oraliq kilometri</h3>
            <h2 className="subtitle">{props.location.state.comp.uzunligi}</h2>
          </div>
          <div className="card start-date">
            <h3 className="title">Ta`mirlash boshlangan sana</h3>
            <h2 className="subtitle">{props.location.state.comp.boshlangan}</h2>
          </div>
          <div className="card end-date">
            <h3 className="title">Ta`mirlash tugagan sana</h3>
            <h2 className="subtitle">{props.location.state.comp.tugatiladi}</h2>
          </div>
          <div className="card money">
            <h3 className="title">Ajratilingan mablag miqdori</h3>
            <h2 className="subtitle">{props.location.state.comp.mablag}</h2>
          </div>
          <div className="card save-money">
            <h3 className="title">O'zlashtirilgan mablag miqdori</h3>
            <h2 className="subtitle">
              {props.location.state.comp.ozlashtirilgan}
            </h2>
          </div>
          <div className="card asset">
            <h3 className="title">Moliya manbai</h3>
            <h2 className="subtitle">{props.location.state.comp.manbai}</h2>
          </div>
          <div className="card organization">
            <h3 className="title">Vakolatli organ</h3>
            <h2 className="subtitle">{props.location.state.comp.organ}</h2>
          </div>
          <div className="card constructor">
            <h3 className="title">Pudratchi</h3>
            <h2 className="subtitle">{props.location.state.comp.pudratchi}</h2>
          </div>
          <div className="card date">
            <h3 className="title">Tashkil etilgan sana</h3>
            <h2 className="subtitle">{props.location.state.comp.sana}</h2>
          </div>
          <div className="card number">
            <h3 className="title">Ishchilar soni</h3>
            <h2 className="subtitle">{props.location.state.comp.ishchilar}</h2>
          </div>
          <div className="card save">
            <h3 className="title">
              <label for="pass">Saqlas</label>
            </h3>
            <a href="../assets/logo1.png" download>
              Saqlash
            </a>
            {/* <input type="file" allows="pdf" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default tabletemplate;
