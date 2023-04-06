import { FC } from 'react';
import { menuLinks } from '../../models/menu-links';
import './styles.scss';

const Header: FC = () => {
    return (
        <div className="header">
            <div className="header__menu">
                { menuLinks.map((menuLink, index) => {
                        return <a 
                            href={menuLink.link}
                            className='header__menu-item'
                            key={ index }
                        >
                            { menuLink.name }
                        </a>
                    })
                }
            </div>
        </div>
    )
}

export default Header