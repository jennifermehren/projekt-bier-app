import "./Details.scss"
import { useParams } from "react-router-dom";

const Details = (props) => {
    const {id} = useParams();
    const data = props.onebeerdata(id)

    return ( 
        <div className="content details-container">
            <div className="details">
                {data.name}
            </div>

        </div>
     );
}
 
export default Details;