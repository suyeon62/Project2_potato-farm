import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import graystar from "../../images/graystar.png";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import leftarrow from "../../images/leftarrow.png";
import commentImage from "../../images/commentImage.png";

const Review = styled.div`
  background-color: #212529;
  color: #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserReview = styled.div``;

const WrapUserReviewTitle = styled.div``;

const GobackButton = styled(Link)`
  cursor: pointer;
`;

const GobackButtonImage = styled.img`
  margin: 10px 0;
  width: 24px;
  height: 24px;
`;

const UserReviewTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const UserReviewContentsContainer = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수평 가운데 정렬 */
  margin-bottom: 20px;
`;
const WrapUserReviewContents = styled.li`
  width: 610px;
  list-style-type: none;
  padding: 0 12px;
  background-color: black;
  border-radius: 6px;
`;
const UserReviewContentsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ededed;
`;
const WrapUserReviewContentsTitle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const UserImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 11px 8px 11px 0px;
`;
const UserName = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: white;
`;
const MovieRate = styled.div`
  display: flex;
  align-items: center;
  color: #ededed;
  background-color: rgb(74, 74, 74);
  border: solid 1px rgb(234, 234, 234);
  border-radius: 13px;
  height: 26px;
  padding: 0 8px;
`;
const RateImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 3px;
`;
const UserRate = styled.div`
  font-size: 14px;
`;

const UserReviewContents = styled.div`
  height: 100%;
  margin: 12px 0px 15px;
`;

const UserReviewContentsMain = styled(Link)`
  white-space: normal;
  word-break: break-word;
  text-decoration: none;
  color: inherit;
`;

const ActiveArea = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  border-top: 1px solid #ededed;
`;
const Like = styled.div`
  display: flex;
  align-items: center;
`;
const LikeImg = styled.img`
  width: 18px;
  height: 18px;
  margin: 0 3px;
`;

const LikeCnt = styled.div`
  font-size: 14px;
`;
const UserCommentComment = styled.div`
  display: flex;
  align-items: center;
`;
const UserCommentCommentImg = styled.img`
  width: 18px;
  height: 18px;
  margin: 0px 3px 0px 13px;
`;
const UserCommentCommentCnt = styled.div`
  font-size: 14px;
`;

const MovieInfoComments = () => {
  return (
    <>
      <Review>
        <UserReview>
          <WrapUserReviewTitle>
            <GobackButton to="/movie/:movieName">
              <GobackButtonImage
                src={leftarrow}
                alt="뒤로가기 버튼"
              ></GobackButtonImage>
            </GobackButton>
            <UserReviewTitle>코멘트</UserReviewTitle>
          </WrapUserReviewTitle>

          <UserReviewContentsContainer>
            <WrapUserReviewContents>
              <UserReviewContentsTitleContainer>
                <WrapUserReviewContentsTitle to="/mypage">
                  <UserImage src={userImage} alt="유저 이미지"></UserImage>
                  <UserName>userName</UserName>
                </WrapUserReviewContentsTitle>
                <MovieRate>
                  <RateImage src={graystar} alt="별점 이미지"></RateImage>
                  <UserRate>userRate</UserRate>
                </MovieRate>
              </UserReviewContentsTitleContainer>

              <UserReviewContents>
                <UserReviewContentsMain to="/comments/1">
                  userReview
                  zazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                  zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                  zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                </UserReviewContentsMain>
              </UserReviewContents>

              <ActiveArea>
                <Like>
                  <LikeImg src={likeImage} alt="좋아요 이미지"></LikeImg>
                  <LikeCnt>likeCnt</LikeCnt>
                </Like>
                <UserCommentComment>
                  <UserCommentCommentImg
                    src={commentImage}
                    alt="댓글 이미지"
                  ></UserCommentCommentImg>
                  <UserCommentCommentCnt>
                    userCommentCommnentCnt
                  </UserCommentCommentCnt>
                </UserCommentComment>
              </ActiveArea>
            </WrapUserReviewContents>
          </UserReviewContentsContainer>

          <UserReviewContentsContainer>
            <WrapUserReviewContents>
              <UserReviewContentsTitleContainer>
                <WrapUserReviewContentsTitle to="/mypage">
                  <UserImage src={userImage} alt="유저 이미지"></UserImage>
                  <UserName>userName</UserName>
                </WrapUserReviewContentsTitle>
                <MovieRate>
                  <RateImage src={graystar} alt="별점 이미지"></RateImage>
                  <UserRate>userRate</UserRate>
                </MovieRate>
              </UserReviewContentsTitleContainer>

              <UserReviewContents>
                <UserReviewContentsMain to="/comments/1">
                  userReview
                  zazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                  zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                </UserReviewContentsMain>
              </UserReviewContents>

              <ActiveArea>
                <Like>
                  <LikeImg src={likeImage} alt="좋아요 이미지"></LikeImg>
                  <LikeCnt>likeCnt</LikeCnt>
                </Like>
                <UserCommentComment>
                  <UserCommentCommentImg
                    src={commentImage}
                    alt="댓글 이미지"
                  ></UserCommentCommentImg>
                  <UserCommentCommentCnt>
                    userCommentCommnentCnt
                  </UserCommentCommentCnt>
                </UserCommentComment>
              </ActiveArea>
            </WrapUserReviewContents>
          </UserReviewContentsContainer>
        </UserReview>
      </Review>
    </>
  );
};

export default MovieInfoComments;
