import {  BrowserRouter, Route, Routes } from "react-router-dom"
import Home      from "./pages/Home"
import Filme     from "./pages/Filme"
import Favoritos from "./pages/Favoritos"

import Header    from "./components/Header"

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/"          element={ <Home /> }/>
                <Route path="/filme/:id" element={ <Filme /> }/>
                <Route path="/favoritos" element={ <Favoritos /> }/>
            </Routes>
        </BrowserRouter>
    )
}
