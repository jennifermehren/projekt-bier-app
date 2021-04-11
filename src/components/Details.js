import "./Details.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import arrow from "../assets/Vector.png";
const Details = (props) => {
  const { id } = useParams();
  let myData;
  if (id === undefined) {
    myData = props.data;
  } else {
    myData = props.data(id);
  }
  const data = myData;

  return (
    <div className="content details-container">
      <div className="detailsImg">
        <img src={data.image_url} alt="product img beer" />
      </div>
      <div className="detailsHeader">
        <h1>{data.name}</h1>
        <h2>{data.tagline}</h2>
      </div>
      <div className="details">
        <div className="details-items">
          <p>First brewed:</p>
          <p>{data.first_brewed}</p>
        </div>
        <div className="details-items">
          <p>Attenuation Level:</p>
          <p>{data.attenuation_level}</p>
        </div>
        <p>{data.description}</p>
      </div>
      <button className="arrowBtn btnHover" type="button">
        <Link to="/products">
          <img src={arrow} alt="arrow" />
        </Link>
      </button>
      <div className="platzhalterNavbar"></div>
    </div>
  );
};

export default Details;
