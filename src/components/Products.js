import "./Products.scss";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
const Products = (props) => {
  return (
    <div className="content products-container">
      <div className="product-card">
        {props.beerdata.map((item, i) => (
          <div key={i} className="product-container">
            {item.name}
           <div className="product-details"> <Link to={"/details/"+item._id} >details </Link></div>
          </div>
        ))}
      </div>
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
