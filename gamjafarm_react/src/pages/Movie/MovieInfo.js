import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import graystar from "../../images/graystar.png";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import arrowleft from "../../images/arrow-left.png";
import arrowright from "../../images/arrow-right.png";
import { scrollLeft, scrollRight } from "../../Hook/scrollFunctions";
import * as m from "../../Styles/Movie/MovieInfoStyle";
import { useParams } from "react-router-dom";

const MovieInfo = () => {
  const [moviesData, setMoviesData] = useState([]); // 영화 정보를 담을 상태
  //const [code, setCode] = useState("");

  let { code } = useParams();
  console.log("code>>>", code);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const response = await axios.get(`/home/movie/detail/${code}`); // 코드로부터 영화 정보 가져오기
        setMoviesData(response.data); // 받아온 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMoviesData(); // 영화 정보를 가져오는 함수 호출
  }, []);

  //팝업
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
      {moviesData &&
        moviesData.map((movie) => (
          <m.Movie key={movie.code}>
            <m.MoviePage>
              <m.MovieInfoContainer>
                <m.MovieBackgroundImage>
                  <m.WrapMovieInfo>
                    <m.MovieTitle>
                      <m.MovieNameKor>{movie.name_kor}</m.MovieNameKor>
                      <m.MovieNameEng>{movie.name_eng}</m.MovieNameEng>
                      <m.MovieInfo1>
                        <m.MovieReleaseAt>{movie.release_at}</m.MovieReleaseAt>
                        <m.MovieGenre>
                          {`${movie.genre_1}, ${movie.genre_2}`}
                        </m.MovieGenre>
                        <m.MovieCountry>{movie.country}</m.MovieCountry>
                      </m.MovieInfo1>

                      <m.MovieInfo2>
                        <m.RunningTime>{movie.running_time}</m.RunningTime>
                        <m.MovieAgeType>{movie.age_type}</m.MovieAgeType>
                      </m.MovieInfo2>
                      <m.MovieInfo3>
                        <m.Ranking>RANKING</m.Ranking>
                        <m.TotalAudience>
                          {movie.total_audience}
                        </m.TotalAudience>
                      </m.MovieInfo3>
                    </m.MovieTitle>
                  </m.WrapMovieInfo>
                </m.MovieBackgroundImage>
              </m.MovieInfoContainer>

              <m.MovieContents>
                <m.MovieContentsContainer>
                  <m.LeftMovieContentsContainer>
                    <m.Poster scr={movie.poster} alt="포스터"></m.Poster>
                  </m.LeftMovieContentsContainer>

                  <m.RightMovieContentsContainer>
                    <m.TopContents>
                      <m.UserMovieRate>userMovieRate</m.UserMovieRate>
                      <m.Rate>{movie.rate_avg}</m.Rate>
                      <m.UserMovieWish>userMovieWish</m.UserMovieWish>
                      <m.UserComment onClick={openPopup}>
                        userComment
                      </m.UserComment>
                    </m.TopContents>

                    <m.BottomContents>
                      <m.MoviePlot>moviePlot</m.MoviePlot>
                    </m.BottomContents>
                  </m.RightMovieContentsContainer>
                </m.MovieContentsContainer>

                <m.MoviePeople>
                  <m.MoviePeopleTitle>출연/제작</m.MoviePeopleTitle>

                  <m.MoviePeopleName>
                    <m.MovieDirector>{movie.director_1}</m.MovieDirector>
                    <m.MovieDirector>{movie.director_2}</m.MovieDirector>
                    <m.MovieActor>{movie.actor_1}</m.MovieActor>
                    <m.MovieActor>{movie.actor_2}</m.MovieActor>
                    <m.MovieActor>{movie.actor_3}</m.MovieActor>
                    <m.MovieActor>{movie.actor_4}</m.MovieActor>
                    <m.MovieActor>{movie.actor_5}</m.MovieActor>
                  </m.MoviePeopleName>
                </m.MoviePeople>

                <m.UserReview>
                  <m.UserReviewTitleContainer>
                    <m.WrapUserReviewTitle>
                      <m.UserReviewTitle>코멘트</m.UserReviewTitle>
                      <m.UserReviewCnt>userReviewCnt</m.UserReviewCnt>
                    </m.WrapUserReviewTitle>
                    <m.MoreBtn to={`/movie/${code}/comments`}>더보기</m.MoreBtn>
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
                      <m.StillcutContents>
                        <img src={movie.stillcut_1} alt="스틸컷1" />
                      </m.StillcutContents>
                      <m.StillcutContents>
                        <img src={movie.stillcut_2} alt="스틸컷2" />
                      </m.StillcutContents>
                      <m.StillcutContents>
                        <img src={movie.stillcut_3} alt="스틸컷3" />
                      </m.StillcutContents>
                      <m.StillcutContents>
                        <img src={movie.stillcut_4} alt="스틸컷4" />
                      </m.StillcutContents>
                      <m.StillcutContents>
                        <img src={movie.stillcut_5} alt="스틸컷5" />
                      </m.StillcutContents>
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
                      <m.TeaserContents>
                        <img src={movie.teaser} alt="티져" />
                      </m.TeaserContents>
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
        ))}

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
