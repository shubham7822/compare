import * as actionTypes from "../actions/ActionTypes";
import axios from "axios";

export const fetchedData = (data) => {
  return {
    type: actionTypes.FETCHEDDATA,
    payload: data,
  };
};

export const fetchingData = () => {
  return {
    type: actionTypes.FETCHINGDATA,
  };
};

export const fetchingDataFailure = (error) => {
  return {
    type: actionTypes.FETCHINGDATAFAIL,
    payload: error,
  };
};

export const AddingData = (data) => {
  return {
    type: actionTypes.ADDINGDATA,
    payload: data,
  };
};

export const DeleteData = (id) => {
  return {
    type: actionTypes.DELETINGDATA,
    payload: id,
  };
};

export const fetchDataResponse = () => {
  return (dispatch) => {
    dispatch(fetchingData());
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        const photoData = response.data.slice(4500);
        dispatch(fetchedData(photoData));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(fetchingDataFailure(error.message));
      });
  };
};
