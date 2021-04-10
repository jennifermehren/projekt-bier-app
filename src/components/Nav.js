import "./Nav.scss"
import { Link } from "react-router-dom";
import icon from "../assets/beericon.jpg"

const Nav = () => {
    return ( 
        <div className="nav-container">
            <nav className="navbar">
                <button type="button"><Link to="/"><img src={icon} alt="bierglas"/></Link></button>
            </nav>

        </div>
     );
}
 
export default Nav;