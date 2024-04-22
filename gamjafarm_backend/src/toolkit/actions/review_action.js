import axios from "axios";
import { reviewReducers } from "../createSlice/review_createSlice";
import { useState } from "react";

//리뷰 리스트
function getReviewList(currentPage) {
  return async (dispatch) => {
    const reviewResponse = await axios
      .get(`/review/list/${currentPage}`)
      .then((response) => response.data);
    // console.log("action>>", reviewResponse);
    dispatch(reviewReducers.getReviewList({ reviewResponse }));
  };
}

// 리뷰 detail
function getReviewDetail(idx) {
  return async (dispatch) => {
    const reviewResponse = await axios
      .get(`/review/view/${idx}`)
      .then((response) => response.data);
    console.log("view>>", reviewResponse);
    dispatch(reviewReducers.getReviewDetail({ reviewResponse }));
  };
}

//리뷰 write
function getReviewWrite(formData) {
  return async () => {
    await axios
      .post(`/board/write`, formData)
      .then((response) => response.data);
  };
}

export const reviewActions = {
  getReviewList,
  getReviewDetail,
  getReviewWrite,
};
