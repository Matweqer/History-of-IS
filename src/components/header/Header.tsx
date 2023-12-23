import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { menuLinks } from 'models'

import './header.scss'

const Header: FC = () => {
  return (
        <div className="header">
            <div className="header__menu">
                {menuLinks.map(
                  (menuLink, index) => (
                        <Link key={index} to={menuLink.link}>
                        <p className='header__menu-item'>
                            {menuLink.name}
                        </p>
                    </Link>)
                )}

            </div>
        </div>
  )
}

export { Header }
