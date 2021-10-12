import React from "react";
import "../../styles/regions.css";
import TimerIcon from "@material-ui/icons/Timer";
import BuildIcon from "@material-ui/icons/Build";
import DoneIcon from "@material-ui/icons/Done";

function tashkentreg() {
  return (
    <div className="regions">
      <div className="map tashhent">
        <h1>Toshkent viloyati</h1>
        {/* map */}

        <iframe
          title="tashhentreg"
          zoom="none"
          src="https://yandex.com/map-widget/v1/?um=constructor%3A51971f357ad9626e079b63597233d47f1d89654c4293c503f23b20c0ee0316a8&amp;source=constructor"
          width="100%"
          height="800"
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

export default tashkentreg;
