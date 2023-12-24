import React, { type FC } from 'react'
import { Link } from 'react-router-dom'


import { conferences } from 'models'

import './сonferences.scss'


const Conferences: FC = () => {
  return (
        <div className="conferences">
            {conferences.map((conference, index) => (
                <Link key={index} to={conference.link}>
                    <div className="conference">
                        <h2>{conference.title}</h2>
                        <p>{`Год проведения: ${conference.year}`}</p>
                        <p>{conference.description}</p>
                    </div>
                </Link>

            ))}
        </div>
  )
}

export { Conferences }
