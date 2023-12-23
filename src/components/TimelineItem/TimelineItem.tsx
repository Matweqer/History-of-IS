import { type FC } from 'react'
import { type ITimelineItem } from 'types'

import './timelineItem.scss'

const TimelineItem: FC<ITimelineItem> = ({ title, text, date, img }) => {
  return (
      <div className={'timeline-item'}>
          <img src={img} className="timeline-item__icon"/>

          <div className="timeline-item__container">
              <h2 className={'timeline-item__title'} >
                  {title}
              </h2>
              <div className="timeline-item__content">
                  <div className="timeline-item__date">{date}</div>

                  <p className={'timeline-item__text'} >
                      {text}
                  </p>
              </div>
          </div>


      </div>
  )
}

export { TimelineItem }
