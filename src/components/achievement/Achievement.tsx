import { type FC } from 'react'

import { type IAchievement } from 'types'

import './Achievement.scss'

const Achievement: FC<IAchievement> = ({ image, description }) => {
  return (
    <div className="main">
      <img src={image} alt="" className="image-vector"/>
      <span className="description-span">{description}</span>
    </div>
  )
}

export { Achievement }
