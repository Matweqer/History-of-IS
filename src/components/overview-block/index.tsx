import { FC } from 'react';
import { Link } from 'react-router-dom';
import { OverviewBlock } from '../../abstracts/overview-block';
import './styles.scss';
import Button from '../button';

const OverviewBlock: FC<OverviewBlock> = ({
    blockData
}) => {
    const { imgPath, imgAltText, buttonText, title, link, isSwap} = blockData;
    const swap = () => isSwap ? '_swap' : '';

    return (
        <div className={'overview-block ' + swap()}>
            <img src={imgPath} alt={ imgAltText } className='overview-block__image'/>
            <div className='overview-block__content'>
                <p className='overview-block__title'>
                    { title }
                </p>

                <Link to={link} className='overview-block__button'>
                    <Button text={ buttonText } />
                </Link>            
            </div>
        </div>
    );
}

export default OverviewBlock;