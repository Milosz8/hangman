import React from "react";
import styled from "styled-components";

const FigureWrapper = styled.div`
  svg {
    fill: transparent;
    stroke: #fff;
    stroke-width: 10px;
    stroke-linecap: round;
    padding-top: 6rem;
  }
`;

function Figure({ wrongLetters }) {
  const errors = wrongLetters.length;

  return (
    <FigureWrapper>
      <svg width="320" height="400" xmlns="http://www.w3.org/2000/svg">
        <line
          id="svg_2"
          y2="286.11109"
          x2="155.8889"
          y1="286.11109"
          x1="34.8889"
          stroke="#000"
          fill="none"
        />
        {/* rod */}
        <line
          stroke="#000"
          id="svg_3"
          y2="286.11109"
          x2="94.8889"
          y1="4.11108"
          x1="94.8889"
          fill="none"
        />
        <line
          id="svg_4"
          y2="5.11109"
          x2="227.8889"
          y1="5.11109"
          x1="93.8889"
          stroke="#000"
          fill="none"
        />
        <line
          id="svg_6"
          y2="44.55785"
          x2="213.88731"
          y1="5.59253"
          x1="214.23213"
          stroke="#000"
          fill="none"
        />
        {/* head */}
        {errors > 0 && (
          <ellipse
            ry="17.93094"
            rx="16.89646"
            id="svg_7"
            cy="63.17845"
            cx="214.23213"
            stroke="#000"
            fill="none"
          />
        )}
        {/* neck */}

        {errors > 1 && (
          <line
            id="svg_8"
            y2="88.35073"
            x2="214.23213"
            y1="81.45421"
            x1="214.23213"
            stroke="#000"
            fill="none"
          />
        )}
        {/* body */}
        {errors > 2 && (
          <line
            id="svg_10"
            y2="151.79868"
            x2="213.54248"
            y1="88.0059"
            x1="214.23213"
            stroke="#000"
            fill="none"
          />
        )}
        {/* rarm */}
        {errors > 3 && (
          <line
            id="svg_11"
            y2="135.59187"
            x2="247.33541"
            y1="89.73003"
            x1="214.57696"
            stroke="#000"
            fill="none"
          />
        )}
        {/* larm */}
        {errors > 4 && (
          <line
            id="svg_12"
            y2="91.10934"
            x2="213.88731"
            y1="135.24704"
            x1="183.19781"
            stroke="#000"
            fill="none"
          />
        )}
        {/* rhand */}
        {errors > 5 && (
          <ellipse
            ry="3.62067"
            rx="3.27585"
            id="svg_13"
            cy="136.45393"
            cx="247.23756"
            stroke="#000"
            fill="none"
          />
        )}
        {/* lhand */}
        {errors > 6 && (
          <ellipse
            ry="3.62067"
            rx="3.27585"
            id="svg_14"
            cy="135.96"
            cx="182.95084"
            stroke="#000"
            fill="none"
          />
        )}
        {/* rleg */}
        {errors > 7 && (
          <line
            id="svg_19"
            y2="227.34349"
            x2="240.04747"
            y1="150.79216"
            x1="213.49588"
            stroke="#000"
            fill="none"
          />
        )}
        {/* lleg */}
        {errors > 8 && (
          <line
            id="svg_21"
            y2="226.38356"
            x2="185.80731"
            y1="151.55636"
            x1="213.39337"
            stroke="#000"
            fill="none"
          />
        )}
        {/* rfoot */}
        {errors > 9 && (
          <rect
            id="svg_22"
            height="5.86204"
            width="16.20681"
            y="225.30248"
            x="235.89091"
            stroke="#000"
            fill="none"
          />
        )}
        {/* lfoot */}
        {errors > 10 && (
          <rect
            id="svg_23"
            height="6.20686"
            width="17.58612"
            y="224.95766"
            x="172.9742"
            stroke="#000"
            fill="none"
          />
        )}
      </svg>
    </FigureWrapper>
  );
}

export default Figure;
