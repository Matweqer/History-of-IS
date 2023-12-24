import React, { type FC } from 'react'

import { Direction } from 'components'
import { directions } from 'models'

import './directions.scss'

const Directions: FC = () => {
  return (
        <div className="directions">
            {directions.map((direction, index) => (
                <Direction key={index} {...direction} />
            ))}
        </div>
  )
}

export { Directions }
