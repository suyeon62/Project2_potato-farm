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
  console.log("formData:", formData);
  return async () => {
    await axios
      .post(`/review/write`, formData)
      .then((response) => response.data);
  };
}

//리뷰 update
function getReviewUpdate(idx, formData) {
  return async () => {
    await axios
      .put(`/review/update/${idx}`, formData)
      .then((response) => response.data);
    console.log("Ffform", formData);
  };
}

//리뷰 delete
function getReviewDelete(idx) {
  return async () => {
    await axios
      .delete(`/review/delete/${idx}`)
      .then((response) => response.data);
  };
}

export const reviewActions = {
  getReviewList,
  getReviewDetail,
  getReviewWrite,
  getReviewUpdate,
  getReviewDelete,
};
