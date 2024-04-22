import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  viewList: [],
  pageInfo: { currentPage: 1 },
  reviewDetail: {},
  // boardFile: null,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    getReviewList(state, action) {
      // console.log("action>>>>", action.payload);
      state.viewList = action.payload.reviewResponse.viewList;
      state.pageInfo = action.payload.reviewResponse.pageInfo;
    },
    getReviewDetail(state, action) {
      state.reviewDetail = action.payload.reviewResponse;
    },
  },
});

//board_action에서 사용함
//export const{getBoardList}=boardSlice.actions;
export const reviewReducers = reviewSlice.actions;

//store에서 사용함0.0
export default reviewSlice;
