import axios from "axios";

export function homeFetchDataSuccess(data) {
  return {
    type: "HOME_FETCH_DATA_SUCCESS",
    payload: data
  };
}

export function homeFetchData(url) {
  return (dispatch) => {
    axios
      .get(url, {
        params: {
          _limit: 50,
        },
      })
      .then((response) => {
        dispatch(homeFetchDataSuccess(response.data));
      })
      .catch( (error) =>{
        console.log(error);
      } )
  };
}
