import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import arrowleft from "../../images/arrow-left.png";
import arrowright from "../../images/arrow-right.png";
import { scrollLeft, scrollRight } from "../../Hook/scrollFunctions";
import * as m from "../../Styles/Main/MainStyle";
import { useParams } from "react-router-dom";

const Main = () => {
  const movieListRef = useRef(null);
  const [allMoviesData, setAllMoviesData] = useState([]);
  const [domesticMoviesData, setDomesticMoviesData] = useState([]);
  const [foreignMoviesData, setForeignMoviesData] = useState([]);
  const [animationListData, setAnimationListData] = useState([]);
  const [dailyboxofficeData, setDailyboxofficeData] = useState([]); // 영화 정보를 담을 상태
  const [selectedcode, setSelectedCode] = useState("");
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    const fetchDailyBoxoffice = async () => {
      try {
        const [
          domesticMoviesResponse,
          foreignMoviesResponse,
          animationListResponse,
        ] = await Promise.all([
          axios.get(`/home`).then((response) => response.data.domesticmovies),
          axios.get(`/home`).then((response) => response.data.foreignmovies),
          axios.get(`/home`).then((response) => response.data.animationList),
        ]);

        const domesticMoviesData = domesticMoviesResponse;
        const foreignMoviesData = foreignMoviesResponse;
        const animationListData = animationListResponse;
        setDomesticMoviesData(domesticMoviesData);
        setForeignMoviesData(foreignMoviesData);
        setAnimationListData(animationListData);

        const combinedMoviesData = [
          ...domesticMoviesData,
          ...foreignMoviesData,
          ...animationListData,
        ];
        setAllMoviesData(combinedMoviesData);

        const codes = combinedMoviesData.map((movie) => movie.code); // 영화 코드들을 추출
        setSelectedCode(codes); // 영화 코드들을 상태에 저장

        //박스오피스
        const dailyboxofficeResponse = await axios
          .get(`/home`)
          .then((response) => response.data.dailyboxoffice); // 코드로부터 영화 정보 가져오기

        setDailyboxofficeData(dailyboxofficeResponse); // 받아온 데이터를 상태에 저장

        const commentResponse = await axios.get(`/review/list/1`);
        setCommentsData(commentResponse.data.viewList);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchDailyBoxoffice(); // 영화 정보를 가져오는 함수 호출
  }, []);

  // console.log("selectedCode>>>", selectedcode);

  return (
    <>
      <m.MainPage>
        <m.MainPageContainer>
          <m.Comments>
            <m.CommentHeader>
              <m.CommentHeaderName>지금 뜨는 코멘트</m.CommentHeaderName>
              <m.CommentLink to="/playground/comments/1">
                더보기 {">"}
              </m.CommentLink>
            </m.CommentHeader>

            <m.BoxContainer>
              <m.BoxList>
                {commentsData &&
                  commentsData.map((comment, index) => {
                    // commentsData에 있는 각 댓글의 movie_code와 일치하는 영화 정보를 찾습니다.
                    const matchedMovie = allMoviesData.find(
                      (movie) => movie.code === comment.movie_code
                    );
                    // 영화 정보가 있을 경우에만 해당 영화 정보를 이용하여 댓글과 영화 정보를 매칭합니다.
                    if (matchedMovie) {
                      return (
                        <m.Box key={index}>
                          <m.BoxContents>
                            <m.CommentBox to="/playground/comments/1">
                              <m.BoxTitle>
                                <m.BoxTitleContainer>
                                  <m.UserImage
                                    src={userImage}
                                    alt="유저 이미지"
                                  />
                                  <m.UserName>{comment.user_id}</m.UserName>
                                </m.BoxTitleContainer>
                                <m.MovieRate>{comment.userRate}</m.MovieRate>
                              </m.BoxTitle>

                              <m.BoxBodyContainer>
                                <m.MoviePoster
                                  src={matchedMovie.poster}
                                  alt="포스터"
                                />
                                <m.MovieComment>
                                  <m.MovieName>
                                    {matchedMovie.name_kor}
                                  </m.MovieName>
                                  <m.UserComment>
                                    {comment.review}
                                  </m.UserComment>
                                </m.MovieComment>
                              </m.BoxBodyContainer>

                              <m.DividingLine />
                              <m.ActiveArea>
                                <m.Like>
                                  <m.LikeImg
                                    src={likeImage}
                                    alt="좋아요 이미지"
                                  />
                                  <m.LikeCnt>{comment.like_Cnt}</m.LikeCnt>
                                </m.Like>

                                <m.UserCommentComment>
                                  <m.UserCommentCommentImg
                                    src={commentImage}
                                    alt="댓글 이미지"
                                  />
                                  <m.UserCommentCommentCnt>
                                    {comment.userCommentCommentCnt}
                                  </m.UserCommentCommentCnt>
                                </m.UserCommentComment>
                              </m.ActiveArea>
                            </m.CommentBox>
                          </m.BoxContents>
                        </m.Box>
                      );
                    } else {
                      return null; // 영화 정보가 없을 경우 해당 댓글은 표시하지 않습니다.
                    }
                  })}
              </m.BoxList>
            </m.BoxContainer>
          </m.Comments>

          <m.Boxoffice>
            <m.BoxofficeHeader>
              <m.BoxofficeHeaderName>박스오피스 순위</m.BoxofficeHeaderName>
              <m.BoxofficeLink to="/boxoffice">더보기 {">"}</m.BoxofficeLink>
            </m.BoxofficeHeader>

            <m.MovieContainer>
              <m.LeftBtn onClick={() => scrollLeft(movieListRef)}>
                <m.LeftBtnIcon src={arrowleft} alt="왼쪽 이동"></m.LeftBtnIcon>
              </m.LeftBtn>
              <m.WrapMovie ref={movieListRef}>
                {dailyboxofficeData &&
                  dailyboxofficeData.map((movie, index) => (
                    <m.Movie key={movie.code}>
                      <m.MovieRanking>
                        <m.Ranking>{movie.ranking}</m.Ranking>
                      </m.MovieRanking>
                      <m.PosterLink to={`/movie/${selectedcode[index]}`}>
                        <m.Poster src={movie.poster} alt="포스터"></m.Poster>
                      </m.PosterLink>
                      <m.MovieNameKor>{movie.name_kor}</m.MovieNameKor>
                      <m.MovieInfo>
                        <m.MovieReleaseAt>
                          {movie.release_at.slice(
                            0,
                            movie.release_at.indexOf("T")
                          )}
                        </m.MovieReleaseAt>
                        <m.MovieCountry>{movie.country}</m.MovieCountry>
                      </m.MovieInfo>
                      <m.Rate>평균★ {movie.rate_avg}</m.Rate>
                    </m.Movie>
                  ))}
              </m.WrapMovie>
              <m.RightBtn onClick={() => scrollRight(movieListRef)}>
                <m.RightBtnIcon
                  src={arrowright}
                  alt="오른쪽 이동"
                ></m.RightBtnIcon>
              </m.RightBtn>
            </m.MovieContainer>
          </m.Boxoffice>
        </m.MainPageContainer>
      </m.MainPage>
    </>
  );
};

export default Main;
