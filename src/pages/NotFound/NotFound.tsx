import React, { type FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './not-found.scss'

const NotFound: FC = () => {
  const navigate = useNavigate()


  return (
        <div className="not-found">

            <h2>404 - Страница не найдена</h2>
            <p>Извините, запрашиваемая страница не существует.</p>
            <Link to={'..'} onClick={(e) => {
              e.preventDefault()
              navigate(-1)
            }}>Назад</Link>
        </div>
  )
}

export { NotFound }
