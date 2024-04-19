import React, { useEffect, useState } from "react";
import axios from "axios";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import * as m from "../../Styles/Review/ReviewMainStyle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageNavigation from "../PageNavigation";
import { reviewActions } from "../../toolkit/actions/review_action";

const ReviewMain = () => {
  const [isPopular, setIsPopular] = useState(true);

  const handleToggle = () => {
    setIsPopular(!isPopular);
  };

  useEffect(() => {
    getReviewList(currentPage);
  }, []);

  //pagination
  const { currentPage } = useParams();

  const dispatch = useDispatch();

  const getReviewList = (currentPage) => {
    dispatch(reviewActions.getReviewList(currentPage));
  };

  const viewList = useSelector((state) => state.review.viewList);
  const pageInfo = useSelector((state) => state.review.pageInfo);

  return (
    <>
      <m.Review>
        <m.ReviewLayout>
          <m.ReviewHeader>지금 뜨는 리뷰</m.ReviewHeader>

          <m.ToggleButtons>
            <m.Popular active={isPopular} onClick={handleToggle}>
              인기
            </m.Popular>
            <m.Latest active={!isPopular} onClick={handleToggle}>
              최신
            </m.Latest>
          </m.ToggleButtons>

          <m.MainContents>
            {viewList.map((review) => (
              <m.Box key={review.idx}>
                <m.ReviewBox>
                  <m.BoxTitleContainer>
                    <m.BoxTitle to={`/mypage`}>
                      <m.UserImage
                        src={userImage}
                        alt="유저 이미지"
                      ></m.UserImage>
                      <m.UserName>{review.user_id}</m.UserName>
                    </m.BoxTitle>
                    <m.MovieRate>userRate</m.MovieRate>
                  </m.BoxTitleContainer>

                  <m.BoxBodyContainer>
                    <m.PosterLink to={`/movie/${review.movie_code}`}>
                      <m.Poster to src={review.poster} alt="poster"></m.Poster>
                    </m.PosterLink>
                    <m.MovieReview
                      to={`/playground/review/detail/${review.idx}`}
                    >
                      <m.MovieName>{review.name_kor}</m.MovieName>
                      <m.UserReview>{review.review}</m.UserReview>
                    </m.MovieReview>
                  </m.BoxBodyContainer>
                  <m.Cnt>
                    <m.LikeCnt>좋아요 {review.like_Cnt}</m.LikeCnt>
                    <m.UserReviewCommentCnt>
                      댓글 userReviewCommentCnt
                    </m.UserReviewCommentCnt>
                  </m.Cnt>

                  <m.DividingLine></m.DividingLine>
                  <m.ActiveArea>
                    <m.LikeImg src={likeImage} alt="좋아요 이미지"></m.LikeImg>

                    <m.UserReviewCommentImg
                      src={commentImage}
                      alt="댓글 이미지"
                    ></m.UserReviewCommentImg>
                  </m.ActiveArea>
                </m.ReviewBox>
              </m.Box>
            ))}
          </m.MainContents>
        </m.ReviewLayout>
      </m.Review>

      {/* 페이지 번호 */}
      {pageInfo && <PageNavigation getReviewList={getReviewList} />}
      <m.BlankBox></m.BlankBox>
    </>
  );
};

export default ReviewMain;
