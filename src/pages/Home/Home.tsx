import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { Button, OverviewBlock } from 'components'
import { overviewBlocks } from 'models'

import makarevich from 'assets/images/makarevich-taganrog.jpg'

import './home.scss'

const Home: FC = () => {
  return (
    <div className='home-page'>
        <div className="home-page__title-section">
            <div className="home-page__custom-filter">
                <h1 className='home-page__title'>
                    История информационной безопасности на Юге России
                </h1>
            </div>
        </div>

        <div className="home-page__makarevich">
            <div className="home-page__makarevich-title">
                Олег Борисович Макаревич
            </div>

            <div className="home-page__makarevich-content">
                <img
                    src={makarevich}
                    alt="makarevich"
                    className="home-page__makarevich-photo"
                />

                <div className="home-page__makarevich-info">
                    <p className="home-page__makarevich-info-paragraph">
                        Олег Борисович Макаревич, доктор технических наук, профессор,
                        научный руководитель Южно-Российского регионального
                        учебно-научного центра по проблемам информационной безопасности.
                    </p>

                    <p className="home-page__makarevich-info-paragraph">
                        В 1997 году по инициативе Олега Борисовича была создана кафедра безопасности информационных
                        технологий, а затем и факультет информационной безопасности.
                    </p>

                    <p className="home-page__makarevich-info-paragraph">
                        Его усилиями факультет информационной безопасности, а ныне и Институт компьютерных
                        технологий и информационной безопасности Южного федерального университета занял
                        лидирующие позиции в области подготовки высококвалифицированных специалистов по информационной
                        безопасности и зарекомендовал себя как признанный
                        научно-практический центр по исследованиям в области
                        создания и внедрения современных средств защиты информации.
                    </p>

                    <div className='home-page__button-wrapper'>
                        <Link to="/origin">
                            <Button
                                text='Подробнее'
                                className="home-page__makarevich-button"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className='home-page__overview-blocks'>
            <OverviewBlock blockData={ overviewBlocks[0] } />
            <OverviewBlock blockData={ overviewBlocks[1] } />
        </div>

        <div className='home-page__directions'>
            <div className='home-page__directions-content'>
                <h2 className='home-page__directions-title'>
                    Направления подготовки
                </h2>
                <div className='home-page__directions-description'>
                    Кафедра безопасности информационных технологий
                </div>
                <div className='home-page__directions-description'>
                    Институт компьютерных технологий и информационной безопасности
                </div>

                <Link to="/directions">
                    <Button
                        text='Ознакомиться'
                        className='home-page__directions-button'
                    />
                </Link>
            </div>
      </div>

        <div className="home-page__overview-blocks">
            <OverviewBlock blockData={ overviewBlocks[2] } />
            <OverviewBlock blockData={ overviewBlocks[3] } />
        </div>
    </div>
  )
}


export { Home }
