import React, { useRef, useState } from "react";
import styled from "styled-components";
import graystar from "../../images/graystar.png";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import arrowleft from "../../images/arrow-left.png";
import arrowright from "../../images/arrow-right.png";
import { Link } from "react-router-dom";
import { scrollLeft, scrollRight } from "../../Hook/scrollFunctions";

const Movie = styled.div`
  width: 100%;
  background-color: #212529;
  color: #ededed;
  display: flex;
  justify-content: center;
`;

const MoviePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;

const MovieInfoContainer = styled.div`
  width: 100%;
  height: 550px;
  border-bottom: 1px solid white;
`;

const MovieBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(https://an2-img.amz.wtchn.net/image/v2/kL7WfkLDBmHsazMm3ofR6Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1Ua3lNSGd4TURnd2NUZ3dJbDBzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk1UazRNamMwTmpZeE5UWXpORGN6SW4wLlNpRFZ6WVMyUXBfNEhKZFBoblBEZUZxZ2lEaFlVdTdCb3NTRE04VDZHams)
    center center / cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const WrapMovieInfo = styled.div`
  width: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 32.47%,
    rgba(0, 0, 0, 0.6) 67.36%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const MovieTitle = styled.div`
  width: 1320px;
  padding-bottom: 60px;
`;

const MovieNameKor = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 700;
`;
const MovieNameEng = styled.div`
  font-size: 14px;
  margin-top: 16px;
`;
const MovieInfo1 = styled.div`
  display: flex;
  font-size: 14px;
  margin-top: 8px;
`;
const MovieReleaseAt = styled.div`
  margin-right: 6px;
`;
const MovieGenre = styled.div`
  margin-right: 6px;
`;
const MovieCountry = styled.div`
  margin-right: 6px;
`;
const MovieInfo2 = styled.div`
  display: flex;
  font-size: 14px;
  margin-top: 8px;
`;
const RunningTime = styled.div`
  margin-right: 6px;
`;
const MovieAgeType = styled.div`
  margin-right: 6px;
`;
const MovieInfo3 = styled.div`
  display: flex;
  font-size: 14px;
  margin-top: 16px;
`;
const Ranking = styled.div`
  margin-right: 6px;
`;
const TotalAudience = styled.div`
  margin-right: 6px;
`;

const MovieContents = styled.div`
  width: 1320px;
`;

const MovieContentsContainer = styled.div`
  background-color: #7a7a7a77;
  display: flex;
  padding: 30px 0 60px;
`;
const LeftMovieContentsContainer = styled.div``;
const Poster = styled.div`
  width: 280px;
  height: 400px;
  background-color: #ffffff7c;
`;
const RightMovieContentsContainer = styled.div`
  flex-direction: column; /* 세로 방향으로 요소들을 배치 */
  flex: 1;
  margin-left: 32px;
`;
const TopContents = styled.div`
  display: flex;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
`;
const UserMovieRate = styled.div``;
const Rate = styled.div``;
const UserMovieWish = styled.div``;
const UserComment = styled.div`
  cursor: pointer;
`;
const BottomContents = styled.div``;
const MoviePlot = styled.div``;
const MoviePeople = styled.div`
  margin-top: 60px;
  /* height: 276px; */
`;
const MoviePeopleTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const MoviePeopleName = styled.div``;
const MovieDirector = styled.div``;
const MovieActor = styled.div``;
const UserReview = styled.div`
  margin-top: 60px;
`;

const UserReviewTitleContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WrapUserReviewTitle = styled.div`
  display: flex;
`;

const UserReviewTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const UserReviewCnt = styled.div`
  color: rgb(255, 47, 110);
  font-size: 24px;
  font-weight: 400;
  margin-left: 8px;
`;

const MoreBtn = styled(Link)`
  background-color: inherit;
  color: rgb(255, 47, 110);
  text-decoration: none;
  font-size: 15px;
`;
const UserReviewContentsContainer = styled.ul`
  column-gap: 8px;
  display: grid;
  grid-template-columns: 324px 324px 324px 324px;
  padding: 0;
`;
const WrapUserReviewContents = styled.li`
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
  height: 120px;
  margin: 12px 0px 15px;
  overflow: hidden;
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

const LeftBtn = styled.div`
  position: absolute;
  left: -10px;
  top: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 24px;
  background-image: url("gradientRight.svg");
  cursor: pointer;
  margin-left: -32px;
`;

const LeftBtnIcon = styled.img``;

const RightBtn = styled.div`
  position: absolute;
  right: -10px;
  top: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 24px;
  background-image: url("gradientRight.svg");
  cursor: pointer;
  margin-right: -32px;
`;

const RightBtnIcon = styled.img``;

const Stillcut = styled.div`
  margin-top: 60px;
`;
const StillcutTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const StillcutContentsContainer = styled.div`
  position: relative;
  padding: 0 5px;
  height: 320px;
`;

const WrapStillcutContents = styled.ul`
  padding: 0;
  margin-top: 5px;
  margin-bottom: 25px;
  /* margin-right: -5px !important;
  margin-left: -5px !important; */
  display: flex;
  overflow-x: scroll;
  -webkit-scrollbar: no-button;
  /* &::-webkit-scrollbar {
    display: none;
  } */
  scroll-behavior: smooth;
  column-gap: 4px;
  scroll-behavior: smooth;
`;
const StillcutContents = styled.li`
  width: calc(33.3333% - 15px);
  flex-shrink: 0;
  height: 258px;
  padding: 0 5px;
  list-style-type: none;
  border: 1px solid black;
  border-radius: 3px;
`;
const Teaser = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
`;
const TeaserTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const TeaserContentsContainer = styled.div`
  position: relative;
  padding: 0 5px;
  height: 320px;
`;

const WrapTeaserContents = styled.ul`
  padding: 0;
  margin-top: 5px;
  margin-bottom: 25px;
  /* margin-right: -5px !important;
  margin-left: -5px !important; */
  display: flex;
  overflow-x: scroll;
  -webkit-scrollbar: no-button;
  /* &::-webkit-scrollbar {
    display: none;
  } */
  scroll-behavior: smooth;
  column-gap: 4px;
  scroll-behavior: smooth;
`;
const TeaserContents = styled.li`
  width: calc(33.3333% - 15px);
  flex-shrink: 0;
  height: 258px;
  padding: 0 5px;
  list-style-type: none;
  border: 1px solid black;
  border-radius: 3px;
`;

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
const CloseBtn = styled.button`
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

const SaveBtn = styled.button`
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

const MovieInfo = () => {
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

  //좌우 스크롤 버튼
  const teaserListRef = useRef(null);
  const stillcutListRef = useRef(null);
  return (
    <>
      <Movie>
        <MoviePage>
          <MovieInfoContainer>
            <MovieBackgroundImage>
              <WrapMovieInfo>
                <MovieTitle>
                  <MovieNameKor>nameKor</MovieNameKor>
                  <MovieNameEng>nameEng</MovieNameEng>
                  <MovieInfo1>
                    <MovieReleaseAt>releaseAt</MovieReleaseAt>
                    <MovieGenre>movieGenre</MovieGenre>
                    <MovieCountry>country</MovieCountry>
                  </MovieInfo1>

                  <MovieInfo2>
                    <RunningTime>runningTime</RunningTime>
                    <MovieAgeType>ageType</MovieAgeType>
                  </MovieInfo2>
                  <MovieInfo3>
                    <Ranking>ranking</Ranking>
                    <TotalAudience>totalAudience</TotalAudience>
                  </MovieInfo3>
                </MovieTitle>
              </WrapMovieInfo>
            </MovieBackgroundImage>
          </MovieInfoContainer>

          <MovieContents>
            <MovieContentsContainer>
              <LeftMovieContentsContainer>
                <Poster></Poster>
              </LeftMovieContentsContainer>

              <RightMovieContentsContainer>
                <TopContents>
                  <UserMovieRate>userMovieRate</UserMovieRate>
                  <Rate>rate</Rate>
                  <UserMovieWish>userMovieWish</UserMovieWish>
                  <UserComment onClick={openPopup}>userComment</UserComment>
                </TopContents>

                <BottomContents>
                  <MoviePlot>moviePlot</MoviePlot>
                </BottomContents>
              </RightMovieContentsContainer>
            </MovieContentsContainer>

            <MoviePeople>
              <MoviePeopleTitle>출연/제작</MoviePeopleTitle>

              <MoviePeopleName>
                <MovieDirector>director1</MovieDirector>
                <MovieDirector>director2</MovieDirector>
                <MovieActor>actor1</MovieActor>
                <MovieActor>actor2</MovieActor>
                <MovieActor>actor3</MovieActor>
                <MovieActor>actor4</MovieActor>
                <MovieActor>actor5</MovieActor>
              </MoviePeopleName>
            </MoviePeople>

            <UserReview>
              <UserReviewTitleContainer>
                <WrapUserReviewTitle>
                  <UserReviewTitle>코멘트</UserReviewTitle>
                  <UserReviewCnt>userReviewCnt</UserReviewCnt>
                </WrapUserReviewTitle>
                <MoreBtn to="/movie/${movieCode}/comments">더보기</MoreBtn>
              </UserReviewTitleContainer>

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
                    <UserReviewContentsMain to="/playground/comments/1">
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

            <Stillcut>
              <StillcutTitle>갤러리</StillcutTitle>
              <StillcutContentsContainer>
                <LeftBtn onClick={() => scrollLeft(stillcutListRef)}>
                  <LeftBtnIcon src={arrowleft} alt="왼쪽 이동"></LeftBtnIcon>
                </LeftBtn>
                <WrapStillcutContents ref={stillcutListRef}>
                  <StillcutContents>stillcut</StillcutContents>
                  <StillcutContents>stillcut</StillcutContents>
                  <StillcutContents>stillcut</StillcutContents>
                  <StillcutContents>stillcut</StillcutContents>
                  <StillcutContents>stillcut</StillcutContents>
                </WrapStillcutContents>
                <RightBtn onClick={() => scrollRight(stillcutListRef)}>
                  <RightBtnIcon
                    src={arrowright}
                    alt="오른쪽 이동"
                  ></RightBtnIcon>
                </RightBtn>
              </StillcutContentsContainer>
            </Stillcut>

            <Teaser>
              <TeaserTitle>동영상</TeaserTitle>
              <TeaserContentsContainer>
                <LeftBtn onClick={() => scrollLeft(teaserListRef)}>
                  <LeftBtnIcon src={arrowleft} alt="왼쪽 이동"></LeftBtnIcon>
                </LeftBtn>
                <WrapTeaserContents ref={teaserListRef}>
                  <TeaserContents>teaser</TeaserContents>
                  <TeaserContents>teaser</TeaserContents>
                  <TeaserContents>teaser</TeaserContents>
                  <TeaserContents>teaser</TeaserContents>
                  <TeaserContents>teaser</TeaserContents>
                </WrapTeaserContents>
                <RightBtn onClick={() => scrollRight(teaserListRef)}>
                  <RightBtnIcon
                    src={arrowright}
                    alt="오른쪽 이동"
                  ></RightBtnIcon>
                </RightBtn>
              </TeaserContentsContainer>
            </Teaser>
          </MovieContents>
        </MoviePage>
      </Movie>

      {popupOpen && (
        <Popup>
          {/* 팝업 닫기 버튼 */}
          <CloseBtn onClick={closePopup}>X 닫기</CloseBtn>
          {/* 팝업 내용 */}
          <CommentMenu>movieName</CommentMenu>
          <TextContainer>
            <Textarea
              placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
              onChange={handleTextChange}
            ></Textarea>
          </TextContainer>
          <WrapSave>
            <SaveBtn
              style={{ opacity: commentText ? 1 : 0.5 }}
              onClick={closePopup}
            >
              저장
            </SaveBtn>
          </WrapSave>
        </Popup>
      )}
    </>
  );
};

export default MovieInfo;
