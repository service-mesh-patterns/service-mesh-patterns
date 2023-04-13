import React from "react";

const PatternCard = ({
  title,
  label,
  image,
}) => {
  return (
    <div className="card">
      <div className="label">{label}</div>
      <img className="diagram" src={image} alt="Meshery Logo" />
      <div className="title">{title}</div>
    </div>
  );
};

export default PatternCard;