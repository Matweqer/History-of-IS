import { FC } from "react";
import { IDataForNode } from "../../../interfaces/interfaces";
import './styles.scss';

export const LeftNodeForBranch: FC<IDataForNode | any>  = (props) => {
  const { year, header, imagePath, description } = props.dataForNode;


  return (
    <>
      <div className="leftNodeContainer">
        <div style={{ flexGrow: 1 }}>
          <div className="image-node">
            <img src={imagePath} className="front"/>
            <div className="back">{description}</div>
          </div>
          <h1 className="year">{year}</h1>
        </div>
        <div className="containerForHr">
          <div className="hr"></div>
        </div>
      </div>
      <div className="leftNodeContainer"></div>
    </>
  );
}
