import React from "react";
import styled from "styled-components";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import { Link } from "react-router-dom";

const Comment = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CommentBox = styled.div`
  width: 1320px;
`;

const BoxBodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
`;

const BoxTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  margin-bottom: 18px;
`;

const BoxTitle = styled(Link)`
  display: flex;
  align-items: center;
  color: rgb(20, 20, 20);
  font-size: 13px;
  text-decoration: none;
`;

const UserImage = styled.img`
  border: 1.5 solid #ededed;
  border-radius: 50%;
  background-color: #b9babe;
  margin-right: 5px;
  width: 18px;
  height: 18px;
`;

const UserName = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const MovieName = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-top: 3px;
`;

const MovieRate = styled.div``;

const PosterLink = styled(Link)``;

const Poster = styled.img`
  width: 70px;
  height: 104px;
  margin-right: 8px;
`;

const UserComment = styled.div`
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 22px;
`;

const Cnt = styled.div`
  display: flex;
`;

const LikeCnt = styled.div`
  font-size: 12px;
  margin-right: 18px;
`;

const UserCommentCommentCnt = styled.div`
  font-size: 12px;
  margin-right: 18px;
`;

const DividingLine = styled.div`
  height: 1px;
  background-color: rgb(237, 237, 237);
  margin: 10px 0;
  line-height: 18.4px;
`;

const ActiveArea = styled.div`
  display: flex;
`;

const LikeImg = styled.img`
  width: 24px;
  margin-right: 20px;
`;

const UserCommentCommentImg = styled.img`
  width: 24px;
  margin-right: 20px;
`;

const CommentDetails = () => {
  return (
    <>
      <Comment>
        <CommentBox>
          <BoxBodyContainer>
            <BoxTitleContainer>
              <BoxTitle to="/mypage">
                <UserImage src={userImage} alt="유저 이미지"></UserImage>
                <UserName>userName</UserName>
              </BoxTitle>
              <MovieName>movieName</MovieName>
              <MovieRate>userRate</MovieRate>
            </BoxTitleContainer>

            <PosterLink to="/movieInfo">
              <Poster
                to
                src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                alt="poster"
              ></Poster>
            </PosterLink>
          </BoxBodyContainer>

          <UserComment>userComment</UserComment>

          <Cnt>
            <LikeCnt>좋아요 likeCnt</LikeCnt>
            <UserCommentCommentCnt>
              댓글 userCommentCommentCnt
            </UserCommentCommentCnt>
          </Cnt>

          <DividingLine></DividingLine>
          <ActiveArea>
            <LikeImg src={likeImage} alt="좋아요 이미지"></LikeImg>

            <UserCommentCommentImg
              src={commentImage}
              alt="댓글 이미지"
            ></UserCommentCommentImg>
          </ActiveArea>
        </CommentBox>
      </Comment>
    </>
  );
};

export default CommentDetails;
