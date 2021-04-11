import axios from "axios";

const Api = "https://ih-beers-api2.herokuapp.com/beers";

export const getAllBeers = () => {
    return axios.get(Api).then((data) => data.data);
}

// export const getBeer = (id) => {
//     return axios.get(Api+id).then((data) => data.data)
// }

export const getRandomBeer = () => {
    return axios.get(Api+"/random").then((data) => data.data)
}