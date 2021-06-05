import axios from "axios";

import {LOAD_ITEMS} from "../../types";

const LoadItems = () => {

    const URL = "https://60900d873847340017020c11.mockapi.io/recipe";

    return (dispatch) => {
        axios.get(URL).then(response => {
            dispatch({
                type: LOAD_ITEMS,
                payload: response.data
            });
        }).catch(err => console.log("faild to load items " + err));
    }

}

export default LoadItems;