
// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";





const Nav = (props) => {
    return (
        // <h1> Hola, soy el navegador</h1>
        <nav>
            <ul className="holder">

                <li><NavLink className={({ isActive }) => isActive ? "activo" : undefined} to="/" >Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "activo" : undefined} to="/nosotros" >Nosotros</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "activo" : undefined} to="/servicios" >Servicios</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "activo" : undefined} to="/contacto" >Contacto</NavLink></li>


                {/* <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/contacto">Contacto</Link></li> */}
            </ul>
        </nav >
    )
}

export default Nav;