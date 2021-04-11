import "./Products.scss";

import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
} from "react-router-dom";
import Searchbar from "./Searchbar";
const Products = (props) => {
  return (
    <div className="content products-container">
      <Searchbar />
      {props.data.map((item, i) => (
        <div key={i} className="product-card">
          <div className="img-container">
            <img src={item.image_url} alt="product-img Beer" />
          </div>
          <div className="product-details">
            <h1>{item.name}</h1>
            <h2>{item.tagline}</h2>
            <p>Created by: {item.name}</p>
            <Link
              className="goToDetailsBtn button btnHover"
              to={"/details/" + item._id}
            >
              Details{" "}
            </Link>
          </div>
        </div>
      ))}
      <div className="platzhalterNavbar"></div>
    </div>
  );
};

export default Products;

// class Products extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         bier:[]
//         };
//     }
//     componentDidMount() {
//         axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
//           .then(res => {
//             const bier = res.data;
//             this.setState({bier});
//           })}
//     render() {
//         return (
//             <div className="content products-container">
//                 <div className="product-card">

//                     {this.state.bier.map((data) => <div className="product-container">{data.name}</div>)}

//                     <div className="product-details">
//                         details
//                     </div>
//                     Products
//                 </div>

//             </div>
//          );
//     }
// }

// // const Products = () => {
// //     return (
// //         <div className="content products-container">
// //             <div className="product-card">
// //                 <div className="product-container">
// //                     image
// //                 </div>
// //                 <div className="product-details">
// //                     details
// //                 </div>
// //                 Products
// //             </div>

// //         </div>
// //      );
// // }

// export default Products;
