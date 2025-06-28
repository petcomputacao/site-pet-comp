import { Link } from "react-router-dom"
import "../styles/Header.css"

export default function Header() {
    <header>
        <img src="process.env.PUBLIC_URL/images/logo-pet.png" alt="LogoPET" className="logopet"/>
        <nav>
            <ul>
                <li><Link to="/">INICIO</Link></li>
                <li><Link to="/projetos">PROJETOS</Link></li>
                <li><Link to="/membros">MEMBROS</Link></li>
            </ul>
        </nav>
    </header>
}
