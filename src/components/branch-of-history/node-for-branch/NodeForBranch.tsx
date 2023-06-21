import { FC } from 'react';
import { IDataForNode } from '../../../interfaces/interfaces';
import './styles.scss';

export const NodeForBranch: FC<IDataForNode | any> = (props) => {
  const { year, header, imagePath, description, longDescription } = props.dataForNode;

  return(
    <div className="node">
      <h1 className="year">{year}</h1>
      <div className="image-node">
        <img src={imagePath} className="image-node" alt=""/>
      </div>
      <div className="line"></div>
      <div className="point"></div>
      {longDescription ?
        <>
          <div className="line-for-long-desc"></div>
          <h1 className="header-for-long-desc">{header}</h1>
          <div className="long-description">{longDescription}</div>
        </>
        :
        <>
          <h1 className="header">{header}</h1>
          <div className="description">{description}</div>
        </>
      }
    </div>
  );
}
