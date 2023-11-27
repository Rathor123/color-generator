import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weigth, hexcolor, index }) => {
  const [alert, setalert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  console.log(hexcolor);

  return (
    <>
      <artical className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
        <p className="percent-value">{weigth}%</p>
        <p className="color-value">{hex}</p>
      </artical>
    </>
  );
};

export default SingleColor;
