import { FC } from "react";
import { IDataForNode } from "../../../interfaces/interfaces";

import './styles.scss';

export const RightNodeForBranch: FC<IDataForNode | any>  = (props) => {
  const { year, header, imagePath, description } = props.dataForNode;

  return (
    <>
      <div className="RightNodeContainer"></div>
      <div className="RightNodeContainer">
        <div className="containerForHr">
          <div className="hr"></div>
        </div>
        <div style={{ flexGrow: 1 }}>
          <div className="image-node">
            <div className="back">{description}</div>
          </div>
          <h1 className="year">{year}</h1>
        </div>
      </div>
    </>
  );
}
