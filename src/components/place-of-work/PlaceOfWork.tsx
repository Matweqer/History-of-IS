import React from 'react';
import { PropPlaceOfWork } from '../../types/types';
import './PlaceOfWork.scss';

export const PlaceOfWork: React.FC<PropPlaceOfWork> = ({ description }) => {

  return (
    <div className="block">
      <span className="space">{description}</span>
    </div>
  )
}
