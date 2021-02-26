
import { NavLink } from 'react-router-dom';
import '../styling/Navbar.css'

//Setting Navlinks
const Navbar = () => {
    return (
        <>
            <div className="NavbarStyle">
                <NavLink className="NavbarHomeButton" exact to="/home">Star Wars</NavLink>
                <NavLink className="NavbarButton" to="/people">People</NavLink>
                <NavLink className="NavbarButton" to="/planets">Planets</NavLink>
                <NavLink className="NavbarButton" to="/films">Films</NavLink>
            </div>
        </>
    )
}

export default Navbar
