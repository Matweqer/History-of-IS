import React, { type FC } from 'react'

import { type IDirection } from 'types'

import './direction.scss'


const Direction: FC<IDirection> = ({
  title,
  duration,
  skills,
  careerProspects,
  salaries,
  careerGrowth,
  abroadOpportunities,
  demand
}) => {
  return (
        <div className="direction">
            <h2>{title}</h2>
            <p>
                <strong>Время обучения:</strong> {duration}
            </p>
            <div>
                <strong>Приобретаемые навыки:</strong>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div>
                <strong>Перспективы работы:</strong>
                <ul>
                    {careerProspects.map((prospect, index) => (
                        <li key={index}>{prospect}</li>
                    ))}
                </ul>
            </div>
            <p>
                <strong>Зарплаты:</strong> {salaries}
            </p>
            <p>
                <strong>Карьерный рост:</strong> {careerGrowth}
            </p>
            <p>
                <strong>За рубежом:</strong> {abroadOpportunities}
            </p>
            <p>
                <strong>Востребованность:</strong> {demand}
            </p>
        </div>
  )
}

export { Direction }
