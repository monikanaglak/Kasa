
import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import {Accueil} from './pages/accueil'
import { Appartment } from './pages/appartment'
import { Error } from './pages/error'
import { Apropos } from './pages/apropos'
//main componant
export function App(){
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Accueil/>}></Route>
                    <Route path="/appartment" element={<Appartment/>}></Route>
                    <Route path="/appartment/:id" element={<Appartment/>}></Route>
                    <Route path="/apropos" element={<Apropos/>}></Route>
                    <Route path="/*" element={<Error/>}></Route>    
                </Routes>
            </BrowserRouter>
    
        
    )
}

export default App