import React from "react";
import { IAchievement } from "../../types/types";
import './Achievement.scss';

export const Achievement: React.FC<IAchievement> = (props) => {
  const { image, description } = props;

  return (
    <div className="main">
      <img src={image} alt="" className="image-vector"/>
      <span className="description-span">{description}</span>
    </div>
  )
}
