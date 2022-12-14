import React, { memo, useState} from "react";
import { useNavigate } from "react-router-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from "react-tooltip";

import "../styles.css"

const Home = ({}) => {

  const [content, setTooltipContent] = useState("");

  const navigate = useNavigate();


  return (
    <>
    <h1 className="title">World School</h1>
    <div className="water" data-tip="">
      <ComposableMap className="geography">
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  className="geography"
                  key={geo.rsmKey} 
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.continent}`);
                  }}

                  onClick={() => navigate(`${geo.properties.link}`)}

                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: `${geo.properties.color}`,
                      outline: "none",
                      cursor: "pointer"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
      </ComposableMap>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
    </>
  );
};

export default memo(Home);
