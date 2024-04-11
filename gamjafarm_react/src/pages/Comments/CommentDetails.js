import React, { useState } from "react";
import styled from "styled-components";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import graystar from "../../images/graystar.png";
import commentIcon from "../../images/commentIcon.png";
import { Link } from "react-router-dom";

const Comment = styled.div`
  background-color: #212529;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 55px;
`;

const CommentBox = styled.div`
  width: 1320px;
  margin: 18px 0 16px;
`;

const BoxTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
`;

const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  margin-bottom: 18px;
`;

const User = styled(Link)`
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
  color: #ededed;
`;

const MovieName = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-top: 3px;
  color: white;
`;

const MovieRate = styled.div`
  display: flex;
  align-items: center;
  color: #ededed;
  background-color: rgb(74, 74, 74);
  border: solid 1px rgb(234, 234, 234);
  border-radius: 13px;
  padding: 0 8px;
  margin-top: 5px;
`;

const RateImage = styled.img`
  width: 16px;
  height: 16px;
`;

const UserRate = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin-left: 4px;
`;

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
  color: #ededed;
`;

const Cnt = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-top: 32px;
  color: #ededed;
`;

const LikeCnt = styled.div`
  font-size: 12px;
  margin-right: 18px;
`;

const UserCommentCommentCnt = styled.div`
  font-size: 12px;
  margin-right: 18px;
`;

const ActiveArea = styled.div`
  column-gap: 1px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 43px;
  border-top: solid 1px rgb(240, 240, 240);
  border-bottom: solid 1px rgb(240, 240, 240);
`;

const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 15px;
  margin: 3px;
  cursor: pointer;

  &:hover {
    color: #292a32;
    background-color: #eeeeef25;
  }

  &::after {
    /* 가상 요소의 스타일 */
    content: "";
    display: block;
    width: 1px;
    height: 14px;
    background-color: rgb(240, 240, 240);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const LikeImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const LikeWord = styled.div`
  color: #ededed;
  font-size: 15px;
  font-weight: 400;
`;

const UserCommentComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 15px;
  margin: 3px;
  cursor: pointer;

  &:hover {
    color: #292a32;
    background-color: #eeeeef25;
  }

  &::after {
    /* 가상 요소의 스타일 */
    content: "";
    display: block;
    width: 1px;
    height: 14px;
    background-color: rgb(240, 240, 240);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const UserCommentCommentImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const UserCommentCommentWord = styled.div`
  color: #ededed;
  font-size: 15px;
  font-weight: 400;
`;

const NoCommentsBox = styled.div`
  margin-top: 35px;
  padding: 16px 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommentIcon = styled.img`
  width: 72px;
  height: 72px;
`;

const CommentInfo = styled.div`
  color: rgb(160, 160, 160);
  font-size: 15px;
  font-weight: 400;
  margin-top: 12px;
`;
const WrapUserCommentCommentBox = styled.div``;

const UserCommentCommentBox = styled.div`
  margin-top: 35px;
  display: flex;
  padding: 12px 0;
  position: relative;
  /* 
  
  flex-direction: column;
  align-items: center; */

  &::after {
    /* 가상 요소의 스타일 */
    content: "";
    display: block;
    width: 1320px;
    height: 1px;
    background-color: rgb(240, 240, 240);
    position: absolute;
    left: 50%;
    bottom: -10px; /* 하단에 위치하도록 설정 */
    transform: translateX(-50%);
  }
`;

const CommentUser = styled.div``;

const CommentUserImage = styled.img`
  border: 1.5 solid #ededed;
  border-radius: 50%;
  background-color: #b9babe;
  width: 32px;
  height: 32px;
`;
const CommentUserContent = styled.div`
  margin-left: 8px;
`;
const CommentUserName = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: white;
`;
const CommentContent = styled.div`
  font-size: 15px;
  font-weight: 400;
  margin: 2px 0 9px;
  color: #ededed;
`;
const CommentLike = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: rgb(126, 126, 126);
`;

const CommentLikeWord = styled.div`
  font-size: 14px;
  margin-right: 12px;
`;

const CommentLikeIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-top: 2px;
  margin-right: 5px;
`;

const CommentLikeCnt = styled.div``;

// 팝업 창 스타일
const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #212529;
  width: 480px;
  min-height: 460px;
  border: 1px solid #ededed;
  border-top-left-radius: 16px;
  padding: 16px 20px 18px;
  z-index: 999;
`;

// 팝업 닫기 버튼 스타일
const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 20px;
  font-size: 11px;
  font-weight: bold;
  color: white;
  background: black;
  border-radius: 7px;
`;

const CommentMenu = styled.div`
  /* width: 423px; */
  font-weight: bold;
  font-size: 17px;
  color: #ededed;
  margin-bottom: 15px;
`;

const TextContainer = styled.div`
  /* width: 423px; */
  height: auto;
  display: flex;
  overflow-y: scroll;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 360px;
  padding: 2px;
  margin: 1px 0;
  border: 1px solid none;
  border-radius: 5px;
  font-size: 17px;
  resize: none;
  background-color: #ededed40;

  /* Placeholder styling */
  &::placeholder {
    font-size: 17px;
    color: #999;
  }
`;

const WrapSave = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

const SaveButton = styled.button`
  background-color: rgb(255, 47, 110);
  height: 38px;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 400;
  padding: 0px 40px;
  border-radius: 7px;
  border: 0px none rgb(255, 255, 255);
  opacity: 0.5;
  margin-left: auto;
`;

const CommentDetails = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  // 팝업 열기 함수
  const openPopup = () => {
    setPopupOpen(true);
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    setPopupOpen(false);
  };

  const [commentText, setCommentText] = useState(""); // 입력된 텍스트를 추적하는 상태

  // 텍스트 입력 시 호출되는 함수
  const handleTextChange = (event) => {
    setCommentText(event.target.value); // 입력된 텍스트를 상태에 업데이트
  };

  return (
    <>
      <Comment>
        <CommentBox>
          <BoxTitleContainer>
            <BoxTitle>
              <User to="/mypage">
                <UserImage src={userImage} alt="유저 이미지"></UserImage>
                <UserName>userName</UserName>
              </User>
              <MovieName>movieName</MovieName>
              <MovieRate>
                <RateImage src={graystar} alt="별점 이미지"></RateImage>
                <UserRate>userRate</UserRate>
              </MovieRate>
            </BoxTitle>

            <PosterLink to="/movie/${movieName}">
              <Poster
                to
                src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                alt="poster"
              ></Poster>
            </PosterLink>
          </BoxTitleContainer>

          <UserComment>userComment</UserComment>

          <Cnt>
            <LikeCnt>좋아요 likeCnt</LikeCnt>
            <UserCommentCommentCnt>
              댓글 userCommentCommentCnt
            </UserCommentCommentCnt>
          </Cnt>

          <ActiveArea>
            <Like>
              <LikeImg src={likeImage} alt="좋아요 이미지"></LikeImg>
              <LikeWord>좋아요</LikeWord>
            </Like>

            <UserCommentComment>
              <UserCommentCommentImg
                src={commentImage}
                alt="댓글 이미지"
              ></UserCommentCommentImg>
              <UserCommentCommentWord onClick={openPopup}>
                댓글
              </UserCommentCommentWord>
            </UserCommentComment>
          </ActiveArea>

          <NoCommentsBox>
            <CommentIcon src={commentIcon} alt="댓글 아이콘"></CommentIcon>
            <CommentInfo>처음으로 댓글을 남겨보세요</CommentInfo>
          </NoCommentsBox>

          <WrapUserCommentCommentBox>
            <UserCommentCommentBox>
              <CommentUser to="/mypage">
                <CommentUserImage
                  src={userImage}
                  alt="유저 이미지"
                ></CommentUserImage>
              </CommentUser>
              <CommentUserContent>
                <CommentUserName>userName</CommentUserName>
                <CommentContent>comments</CommentContent>
                <CommentLike>
                  <CommentLikeWord>좋아요</CommentLikeWord>
                  <CommentLikeIcon
                    src={likeImage}
                    alt="좋아요 이미지"
                  ></CommentLikeIcon>
                  <CommentLikeCnt>Cnt</CommentLikeCnt>
                </CommentLike>
              </CommentUserContent>
            </UserCommentCommentBox>

            <UserCommentCommentBox>
              <CommentUser to="/mypage">
                <CommentUserImage
                  src={userImage}
                  alt="유저 이미지"
                ></CommentUserImage>
              </CommentUser>
              <CommentUserContent>
                <CommentUserName>userName</CommentUserName>
                <CommentContent>comments</CommentContent>
                <CommentLike>
                  <CommentLikeWord>좋아요</CommentLikeWord>
                  <CommentLikeIcon
                    src={likeImage}
                    alt="좋아요 이미지"
                  ></CommentLikeIcon>
                  <CommentLikeCnt>Cnt</CommentLikeCnt>
                </CommentLike>
              </CommentUserContent>
            </UserCommentCommentBox>

            <UserCommentCommentBox>
              <CommentUser to="/mypage">
                <CommentUserImage
                  src={userImage}
                  alt="유저 이미지"
                ></CommentUserImage>
              </CommentUser>
              <CommentUserContent>
                <CommentUserName>userName</CommentUserName>
                <CommentContent>comments</CommentContent>
                <CommentLike>
                  <CommentLikeWord>좋아요</CommentLikeWord>
                  <CommentLikeIcon
                    src={likeImage}
                    alt="좋아요 이미지"
                  ></CommentLikeIcon>
                  <CommentLikeCnt>Cnt</CommentLikeCnt>
                </CommentLike>
              </CommentUserContent>
            </UserCommentCommentBox>
          </WrapUserCommentCommentBox>
        </CommentBox>
      </Comment>

      {popupOpen && (
        <Popup>
          {/* 팝업 닫기 버튼 */}
          <CloseButton onClick={closePopup}>X 닫기</CloseButton>
          {/* 팝업 내용 */}
          <CommentMenu>댓글</CommentMenu>
          <TextContainer>
            <Textarea
              placeholder="이 movieName에 대한 생각을 자유롭게 표현해주세요."
              onChange={handleTextChange}
            ></Textarea>
          </TextContainer>
          <WrapSave>
            <SaveButton
              style={{ opacity: commentText ? 1 : 0.5 }}
              onClick={closePopup}
            >
              저장
            </SaveButton>
          </WrapSave>
        </Popup>
      )}
    </>
  );
};

export default CommentDetails;
