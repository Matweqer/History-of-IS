import { FC } from 'react';
import { menuLinks } from '../../models/menu-links';
import './styles.scss';
import { Link } from 'react-router-dom';

const Header: FC = () => {
    return (
        <div className="header">
            <div className="header__menu">
                { menuLinks.map((menuLink, index) => {
                    return <Link to={menuLink.link}>
                        <p 
                            className='header__menu-item'
                            key={ index }
                        >
                            { menuLink.name }
                        </p>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Header