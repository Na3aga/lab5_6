import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_PAGES, DELETE_PAGE, ADD_PAGE, GET_ERRORS } from "./types";

// GET PAGES
export const getPages = () => (dispatch, getState) => {
  axios
    .get("/api/welcomepage/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_PAGES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE PAGE
export const deletePage = id => (dispatch, getState) => {
  axios
    .delete(`/api/welcomepage/${id}/`,tokenConfig(getState))
    .then(res => {
      try {
        dispatch(createMessage({ deletePage: "Page deleted" }));
      } catch (err) {
        console.log(err);
      }
      dispatch({
        type: DELETE_PAGE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD PAGE
export const addPage = page => (dispatch, getState) => {
  axios
    .post("/api/welcomepage/", page ,tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_PAGE,
        payload: res.data
      });
      try {
        dispatch(createMessage({ addPage: "Page Added" }));
      } catch (err) {
        console.log(err);
      }
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
