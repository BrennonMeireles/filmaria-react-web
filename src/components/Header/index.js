import { Link } from "react-router-dom";
import "./style.css"

function Header() {
    return (
        <header>
            <Link to = {"/"}          className="logo">Home</Link>
            <Link to = {"/favoritos"} className="favoritos">Favoritos</Link>
        </header>
    )
}
export default Header