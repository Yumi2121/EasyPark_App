import React from "react";

const MapMarker = ({ text, tooltip, $hover, url }) => {
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`);
    window.location.href = url
  };

  return (
    <div className={$hover ? "circle hover" : "circle"} onClick={handleClick}>
      <span className="circleText" title={tooltip} onClick={handleClick}>
        {text}
      </span>
    </div>
  );
};

export default MapMarker;
