import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'components'
import { type IOverviewBlock } from 'types'

import './overviewBlock.scss'


const OverviewBlock: FC<{ blockData: IOverviewBlock }> = ({
  blockData: {
    img,
    imgAltText,
    buttonText,
    title,
    link,
    isSwap
  }
}) => {
  const swap = () => isSwap ? '_swap' : ''


  return (
        <div className={'OverviewBlock ' + swap()}>
            <img src={img} alt={imgAltText} className='overview-block__image'/>
            <div className='overview-block__content'>
                <p className='overview-block__title'>
                    {title}
                </p>

                <Link to={link} className='overview-block__button'>
                    <Button text={buttonText}/>
                </Link>
            </div>
        </div>
  )
}

export { OverviewBlock }
