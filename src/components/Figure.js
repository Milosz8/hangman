import React from "react";

function Figure({ wrongLetters }) {
  const errors = wrongLetters.length;

  return (
    <svg width="250" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* rod */}
      <line
        id="svg_1"
        y2="156.78155"
        x2="68.98058"
        y1="44.74271"
        x1="68.39806"
        stroke="#000000"
        fill="none"
      />
      <line
        id="svg_2"
        y2="158.52912"
        x2="96.35922"
        y1="158.33495"
        x1="45.87379"
        stroke="#000000"
        fill="none"
      />
      <line
        id="svg_3"
        y2="44.74271"
        x2="126.26214"
        y1="44.93689"
        x1="69.36893"
        stroke="#000000"
        fill="none"
      />
      <line
        id="svg_4"
        y2="46.29611"
        x2="126.65049"
        y1="55.6165"
        x1="126.65049"
        stroke="#000000"
        fill="none"
      />
      {/* head */}
      {errors > 0 && (
        <ellipse
          ry="7.76699"
          rx="8.4466"
          id="svg_5"
          cy="64.16019"
          cx="126.16505"
          stroke="#000000"
          fill="none"
        />
      )}
      {/* body */}
      {errors > 1 && (
        <line
          id="svg_6"
          y2="105.71359"
          x2="126.65049"
          y1="73.48058"
          x1="126.65049"
          stroke="#000000"
          fill="none"
        />
      )}
      {/* arms */}
      {errors > 2 && (
        <line
          id="svg_7"
          y2="73.67475"
          x2="147.23301"
          y1="86.29611"
          x1="127.62136"
          stroke="#000000"
          fill="none"
        />
      )}
      {errors > 3 && (
        <line
          id="svg_8"
          y2="86.10194"
          x2="125.87379"
          y1="70.76213"
          x1="108.59223"
          stroke="#000000"
          fill="none"
        />
      )}
      {/* legs */}
      {errors > 4 && (
        <line
          id="svg_9"
          y2="133.67475"
          x2="112.08738"
          y1="106.68446"
          x1="126.45631"
          stroke="#000000"
          fill="none"
        />
      )}
      {errors > 5 && (
        <line
          id="svg_10"
          y2="134.0631"
          x2="141.60194"
          y1="107.46116"
          x1="127.81553"
          stroke="#000000"
          fill="none"
        />
      )}
    </svg>
  );
}

export default Figure;
