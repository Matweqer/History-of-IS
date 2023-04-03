import { FC } from 'react';
import './styles.scss';

const Header: FC = () => {
    return (
        <div className="header">
            <div className="header__menu">
                <a 
                    href='#'
                    className='header__menu-item'
                >
                    Главная
                </a>

                <a 
                    href='#'
                    className='header__menu-item'
                >
                    Зарождение
                </a>

                <a 
                    href='#'
                    className='header__menu-item'
                >
                    Конференции
                </a>

                <a 
                    href='#'
                    className='header__menu-item'
                >
                    CTF
                </a>

                <a 
                    href='#'
                    className='header__menu-item'
                >
                    Направления
                </a>
            </div>
        </div>
    )
}

export default Header