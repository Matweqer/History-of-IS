import { type FC } from 'react'

import { timelineItems } from 'models'

import timelineArrow from 'assets/images/arrow-timeline.png'

import './timeline.scss'


import { TimelineItem } from '../TimelineItem'

const Timeline: FC = () => {
  return (
        <div className="timeline">
            <h2 className={'timeline__header'} >
                История зарождения кафедры
            </h2>

            <div className="timeline__container">
                {timelineItems.map(({ img, date, title, text }, index) => (
                    <div key={index} className='timeline__container__block'>
                        <TimelineItem title={title} text={text} img={img} date={date}/>
                        <div
                            className={
                            'timeline__container__block__arrow' +
                                ((index % 2) ? ' --mirrored' : '')}>
                            { index !== timelineItems.length - 1 &&
                                <img src={timelineArrow} alt="arrow"/>
                            }
                        </div>
                    </div>
                )) }
            </div>
        </div>
  )
}

export { Timeline }
