import { type FC } from 'react'
import { type PropPlaceOfWork } from 'types'
import './placeOfWork.scss'

const PlaceOfWork: FC<PropPlaceOfWork> = ({ description }) => {
  return (
    <div className="place-of-work__block">
      <span className="place-of-work__space">{description}</span>
    </div>
  )
}

export { PlaceOfWork }
