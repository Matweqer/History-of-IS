import { type FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DefaultLayout } from 'components'
import { Bio, Ctf, GenesisPage, Home } from 'pages'

const App: FC = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<DefaultLayout/>}>

                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/origin'} element={<GenesisPage/>}/>
                    <Route path={'/ctf'} element={<Ctf/>}/>
                    <Route path={'/bio'} element={<Bio/>}/>

                    {/* <Route path={'/conference'} element={<Bio/>}/> */}
                    {/* <Route path={'/perspective-conference'} element={<Bio/>}/> */}
                    {/* <Route path={'/science'} element={<Bio/>}/> */}

                </Route>

                {/* <Route path='*' element={<NotFound/>}/> */}
            </Routes>
        </BrowserRouter>

  )
}

export default App
