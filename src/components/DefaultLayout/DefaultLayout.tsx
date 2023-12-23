import React, { type FC, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Header, Footer } from 'components'

import './defaultLayout..scss'


const DefaultLayout: FC = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className={'layout_content'}>
      <Header/>
      <main className={'layout_main'}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export { DefaultLayout }
