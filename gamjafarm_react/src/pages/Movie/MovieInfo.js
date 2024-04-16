import React, { useRef, useState } from "react";
import graystar from "../../images/graystar.png";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import arrowleft from "../../images/arrow-left.png";
import arrowright from "../../images/arrow-right.png";

import { scrollLeft, scrollRight } from "../../Hook/scrollFunctions";
import * as m from "../../Styles/Movie/MovieInfoStyle";

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
      <m.Movie>
        <m.MoviePage>
          <m.MovieInfoContainer>
            <m.MovieBackgroundImage>
              <m.WrapMovieInfo>
                <m.MovieTitle>
                  <m.MovieNameKor>nameKor</m.MovieNameKor>
                  <m.MovieNameEng>nameEng</m.MovieNameEng>
                  <m.MovieInfo1>
                    <m.MovieReleaseAt>releaseAt</m.MovieReleaseAt>
                    <m.MovieGenre>movieGenre</m.MovieGenre>
                    <m.MovieCountry>country</m.MovieCountry>
                  </m.MovieInfo1>

                  <m.MovieInfo2>
                    <m.RunningTime>runningTime</m.RunningTime>
                    <m.MovieAgeType>ageType</m.MovieAgeType>
                  </m.MovieInfo2>
                  <m.MovieInfo3>
                    <m.Ranking>ranking</m.Ranking>
                    <m.TotalAudience>totalAudience</m.TotalAudience>
                  </m.MovieInfo3>
                </m.MovieTitle>
              </m.WrapMovieInfo>
            </m.MovieBackgroundImage>
          </m.MovieInfoContainer>

          <m.MovieContents>
            <m.MovieContentsContainer>
              <m.LeftMovieContentsContainer>
                <m.Poster></m.Poster>
              </m.LeftMovieContentsContainer>

              <m.RightMovieContentsContainer>
                <m.TopContents>
                  <m.UserMovieRate>userMovieRate</m.UserMovieRate>
                  <m.Rate>rate</m.Rate>
                  <m.UserMovieWish>userMovieWish</m.UserMovieWish>
                  <m.UserComment onClick={openPopup}>userComment</m.UserComment>
                </m.TopContents>

                <m.BottomContents>
                  <m.MoviePlot>moviePlot</m.MoviePlot>
                </m.BottomContents>
              </m.RightMovieContentsContainer>
            </m.MovieContentsContainer>

            <m.MoviePeople>
              <m.MoviePeopleTitle>출연/제작</m.MoviePeopleTitle>

              <m.MoviePeopleName>
                <m.MovieDirector>director1</m.MovieDirector>
                <m.MovieDirector>director2</m.MovieDirector>
                <m.MovieActor>actor1</m.MovieActor>
                <m.MovieActor>actor2</m.MovieActor>
                <m.MovieActor>actor3</m.MovieActor>
                <m.MovieActor>actor4</m.MovieActor>
                <m.MovieActor>actor5</m.MovieActor>
              </m.MoviePeopleName>
            </m.MoviePeople>

            <m.UserReview>
              <m.UserReviewTitleContainer>
                <m.WrapUserReviewTitle>
                  <m.UserReviewTitle>코멘트</m.UserReviewTitle>
                  <m.UserReviewCnt>userReviewCnt</m.UserReviewCnt>
                </m.WrapUserReviewTitle>
                <m.MoreBtn to="/movie/${movieCode}/comments">더보기</m.MoreBtn>
              </m.UserReviewTitleContainer>

              <m.UserReviewContentsContainer>
                <m.WrapUserReviewContents>
                  <m.UserReviewContentsTitleContainer>
                    <m.WrapUserReviewContentsTitle to="/mypage">
                      <m.UserImage
                        src={userImage}
                        alt="유저 이미지"
                      ></m.UserImage>
                      <m.UserName>userName</m.UserName>
                    </m.WrapUserReviewContentsTitle>
                    <m.MovieRate>
                      <m.RateImage
                        src={graystar}
                        alt="별점 이미지"
                      ></m.RateImage>
                      <m.UserRate>userRate</m.UserRate>
                    </m.MovieRate>
                  </m.UserReviewContentsTitleContainer>

                  <m.UserReviewContents>
                    <m.UserReviewContentsMain to="/playground/comments/1">
                      userReview
                      zazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                      zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                    </m.UserReviewContentsMain>
                  </m.UserReviewContents>

                  <m.ActiveArea>
                    <m.Like>
                      <m.LikeImg
                        src={likeImage}
                        alt="좋아요 이미지"
                      ></m.LikeImg>
                      <m.LikeCnt>likeCnt</m.LikeCnt>
                    </m.Like>
                    <m.UserCommentComment>
                      <m.UserCommentCommentImg
                        src={commentImage}
                        alt="댓글 이미지"
                      ></m.UserCommentCommentImg>
                      <m.UserCommentCommentCnt>
                        userCommentCommnentCnt
                      </m.UserCommentCommentCnt>
                    </m.UserCommentComment>
                  </m.ActiveArea>
                </m.WrapUserReviewContents>
              </m.UserReviewContentsContainer>
            </m.UserReview>

            <m.Stillcut>
              <m.StillcutTitle>갤러리</m.StillcutTitle>
              <m.StillcutContentsContainer>
                <m.LeftBtn onClick={() => scrollLeft(stillcutListRef)}>
                  <m.LeftBtnIcon
                    src={arrowleft}
                    alt="왼쪽 이동"
                  ></m.LeftBtnIcon>
                </m.LeftBtn>
                <m.WrapStillcutContents ref={stillcutListRef}>
                  <m.StillcutContents>stillcut</m.StillcutContents>
                  <m.StillcutContents>stillcut</m.StillcutContents>
                  <m.StillcutContents>stillcut</m.StillcutContents>
                  <m.StillcutContents>stillcut</m.StillcutContents>
                  <m.StillcutContents>stillcut</m.StillcutContents>
                </m.WrapStillcutContents>
                <m.RightBtn onClick={() => scrollRight(stillcutListRef)}>
                  <m.RightBtnIcon
                    src={arrowright}
                    alt="오른쪽 이동"
                  ></m.RightBtnIcon>
                </m.RightBtn>
              </m.StillcutContentsContainer>
            </m.Stillcut>

            <m.Teaser>
              <m.TeaserTitle>동영상</m.TeaserTitle>
              <m.TeaserContentsContainer>
                <m.LeftBtn onClick={() => scrollLeft(teaserListRef)}>
                  <m.LeftBtnIcon
                    src={arrowleft}
                    alt="왼쪽 이동"
                  ></m.LeftBtnIcon>
                </m.LeftBtn>
                <m.WrapTeaserContents ref={teaserListRef}>
                  <m.TeaserContents>teaser</m.TeaserContents>
                  <m.TeaserContents>teaser</m.TeaserContents>
                  <m.TeaserContents>teaser</m.TeaserContents>
                  <m.TeaserContents>teaser</m.TeaserContents>
                  <m.TeaserContents>teaser</m.TeaserContents>
                </m.WrapTeaserContents>
                <m.RightBtn onClick={() => scrollRight(teaserListRef)}>
                  <m.RightBtnIcon
                    src={arrowright}
                    alt="오른쪽 이동"
                  ></m.RightBtnIcon>
                </m.RightBtn>
              </m.TeaserContentsContainer>
            </m.Teaser>
          </m.MovieContents>
        </m.MoviePage>
      </m.Movie>

      {popupOpen && (
        <m.Popup>
          {/* 팝업 닫기 버튼 */}
          <m.CloseBtn onClick={closePopup}>X 닫기</m.CloseBtn>
          {/* 팝업 내용 */}
          <m.CommentMenu>movieName</m.CommentMenu>
          <m.TextContainer>
            <m.Textarea
              placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
              onChange={handleTextChange}
            ></m.Textarea>
          </m.TextContainer>
          <m.WrapSave>
            <m.SaveBtn
              style={{ opacity: commentText ? 1 : 0.5 }}
              onClick={closePopup}
            >
              저장
            </m.SaveBtn>
          </m.WrapSave>
        </m.Popup>
      )}
    </>
  );
};

export default MovieInfo;
