import React, { useState } from "react";
import styled from "styled-components";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import { Link } from "react-router-dom";

const Comments = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CommentsLayout = styled.div`
  width: 640px;
  padding: 22px 0;
`;

const CommentHeader = styled.div`
  padding: 12px 0 14px;
  font-size: 24px;
  font-weight: 700;
  color: rgb(41, 42, 50);
`;

const ToggleButtons = styled.div`
  padding-bottom: 16px;
`;

const Popular = styled.button`
  /* background-color: rgb(255, 255, 255);
  border: 1.6px solid rgb(231, 231, 231); */
  background-color: ${({ active }) =>
    active ? "rgb(20, 20, 20)" : "rgb(255, 255, 255)"};
  color: ${({ active }) => (active ? "rgb(255, 255, 255)" : "inherit")};
  border: ${({ active }) =>
    active ? "1.6px solid rgb(20, 20, 20)" : "1.6px solid rgb(231, 231, 231)"};

  border-radius: 24px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;
  cursor: pointer;
`;

const Latest = styled.button`
  /* background-color: rgb(20, 20, 20);
  color: rgb(255, 255, 255);
  border: 1.6px solid rgb(20, 20, 20); */
  background-color: ${({ active }) =>
    active ? "rgb(20, 20, 20)" : "rgb(255, 255, 255)"};
  color: ${({ active }) => (active ? "rgb(255, 255, 255)" : "inherit")};
  border: ${({ active }) =>
    active ? "1.6px solid rgb(20, 20, 20)" : "1.6px solid rgb(231, 231, 231)"};

  border-radius: 24px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;
  cursor: pointer;
`;

const MainContents = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Box = styled.div`
  border: 1px solid #ededed;
  border-radius: 5px;
  padding: 11px;
  pad: 8px 0;
`;

const CommentBox = styled.div`
  // text-decoration: none;
  // color: inherit;
`;

const BoxTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
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
  margin-right: 8px;
  width: 36px;
  height: 36px;
`;

const UserName = styled.div`
  font-size: 14px;
`;

const MovieRate = styled.div``;

const BoxBodyContainer = styled.div`
  display: flex;
  padding: 12px 0;
`;

const PosterLink = styled(Link)``;

const Poster = styled.img`
  width: 63px;
  height: 93px;
  margin-right: 8px;
`;

const MovieComment = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MovieName = styled.div`
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 4px;
`;

const UserComment = styled.div`
  font-weight: 400;
  font-size: 15px;
`;

const Cnt = styled.div`
  display: flex;
`;

const LikeCnt = styled.div`
  font-size: 13px;
  margin-right: 12px;
`;

const UserCommentCommentCnt = styled.div`
  font-size: 13px;
  margin-right: 12px;
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

const CommentsMain = () => {
  const [isPopular, setIsPopular] = useState(true);

  const handleToggle = () => {
    setIsPopular(!isPopular);
  };

  return (
    <>
      <Comments>
        <CommentsLayout>
          <CommentHeader>지금 뜨는 코멘트</CommentHeader>

          <ToggleButtons>
            <Popular active={isPopular} onClick={handleToggle}>
              인기
            </Popular>
            <Latest active={!isPopular} onClick={handleToggle}>
              최신
            </Latest>
          </ToggleButtons>

          <MainContents>
            <Box>
              <CommentBox>
                <BoxTitleContainer>
                  <BoxTitle to="/mypage">
                    <UserImage src={userImage} alt="유저 이미지"></UserImage>
                    <UserName>userName</UserName>
                  </BoxTitle>
                  <MovieRate>userRate</MovieRate>
                </BoxTitleContainer>

                <BoxBodyContainer>
                  <PosterLink to="/movieInfo">
                    <Poster
                      to
                      src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                      alt="poster"
                    ></Poster>
                  </PosterLink>
                  <MovieComment to="/comments/1">
                    <MovieName>movieName</MovieName>
                    <UserComment>userComment</UserComment>
                  </MovieComment>
                </BoxBodyContainer>
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
            </Box>
          </MainContents>
        </CommentsLayout>
      </Comments>
    </>
  );
};

export default CommentsMain;
