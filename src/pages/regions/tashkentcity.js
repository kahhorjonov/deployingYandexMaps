import React from "react";
import "../../styles/regions.css";
import TimerIcon from "@material-ui/icons/Timer";
import BuildIcon from "@material-ui/icons/Build";
import DoneIcon from "@material-ui/icons/Done";

function tashkentcity() {
  return (
    <div className="regions">
      <div className="map tashkentcity">
        <h1>Toshkent shahri</h1>
        {/* map */}

        <iframe
          title="tashkentcity"
          src="https://yandex.com/map-widget/v1/?um=constructor%3Add440d67b6347ea50c80ff93bfb5dff8205e678a756d49a3d80f7dd737e0a7da&amp;source=constructor"
          width="692"
          height="700"
          frameborder="0"
        ></iframe>

        {/* map */}
        <div className="marks">
          <p className="plan">
            <TimerIcon />
            rejalashtirilayotgan
          </p>
          <p className="roat">
            <BuildIcon />
            ta'mirlanayotgan
          </p>
          <p className="complated">
            <DoneIcon />
            tugatilgan
          </p>
        </div>
      </div>
    </div>
  );
}

export default tashkentcity;
