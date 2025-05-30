import axios from "axios";
import {
  reviewRequest,
  providerReviewRequest,
  reviewSuccess,
  reviewFail,
  addReviewSuccess,
  allReviewSuccess,
} from "./review.reducer";

export const addReview = (data) => async (dispatch) => {
  try {
    dispatch(reviewRequest());
    const review = await axios({
      method: "POST",
      url: "https://tiffin-managment.onrender.com/api/v1/review",
      data,
    });
    dispatch(addReviewSuccess(review.data));
  } catch (error) {
    return dispatch(reviewFail(error.response.data.message));
  }
};
export const getAllReview = () => async (dispatch) => {
  try {
    dispatch(reviewRequest());
    const review = await axios({
      method: "GET",
      url: `https://tiffin-managment.onrender.com/api/v1/review`,
    });
    dispatch(allReviewSuccess(review.data));
  } catch (error) {
    return dispatch(reviewFail());
  }
};
export const getProvidersReview = (_id) => async (dispatch) => {
  try {
    dispatch(providerReviewRequest());
    const review = await axios({
      method: "GET",
      url: `https://tiffin-managment.onrender.com/api/v1/review/${_id}`,
    });
    dispatch(reviewSuccess(review.data));
  } catch (error) {
    return dispatch(reviewFail());
  }
};
