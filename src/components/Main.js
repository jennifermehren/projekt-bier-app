import "./Main.scss"
import allBeerPic from "../assets/allbeer-christin-hume-08tX2fsuSLg-unsplash.jpg"
import randomBeerPic from "../assets/randombeer-proriat-hospitality-flENqflm6xU-unsplash.jpg"
import { Link } from "react-router-dom";

const Main = () => {
    return ( 
        <div className="content main-container">
            <div className="main-sections">
                <div className="pic-container">
                    <Link to="/products"><img src={allBeerPic} alt="beer bottles"></img>
                    <h1>All Beers</h1></Link>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </div>
            <div className="main-sections">
                <div className="pic-container">
                <Link to="/details"><img src={randomBeerPic} alt="beer glasses"></img>
                    <h1>Random Beers</h1></Link>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </div>

        </div>
     );
}
 
export default Main;