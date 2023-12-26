import { type FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DefaultLayout } from 'components'
import { Bio, Ctf, Origin, Home, Directions, Conferences, Perspective, InformationSecurity } from 'pages'

const App: FC = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<DefaultLayout/>}>

                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/origin'} element={<Origin/>}/>
                    <Route path={'/ctf'} element={<Ctf/>}/>
                    <Route path={'/bio'} element={<Bio/>}/>

                     <Route path={'/directions'} element={<Directions/>}/>
                     <Route path={'/conferences'} element={<Conferences/>}/>
                     <Route path={'/conferences/perspective'} element={<Perspective/>}/>
                     <Route path={'/conferences/information-security'} element={<InformationSecurity/>}/>

                </Route>

                {/* <Route path='*' element={<NotFound/>}/> */}
            </Routes>
        </BrowserRouter>

  )
}

export default App
