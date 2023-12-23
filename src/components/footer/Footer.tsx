import { type FC } from 'react'
import { contacts } from '../../models/contacts'
import { ReactSVG } from 'react-svg'

import './footer.scss'

const Footer: FC = () => {
  return (
        <div className="footer">
            <p className='footer__title'>
                Контакты кафедры БИТ:
            </p>

            {
                contacts.map((contact, index) => {
                  return <div key={ index } className="footer__contacts">
                       <p className='footer__name'>
                            { contact.name }
                        </p>

                        <p className='footer__email'>
                            { contact.email }
                        </p>

                        <a href='#' className='footer__link'>
                            <ReactSVG src={ contact.icon } className='footer__icon'/>

                            {contact.contact}
                        </a>
                    </div>
                })
            }
        </div>
  )
}

export { Footer }
