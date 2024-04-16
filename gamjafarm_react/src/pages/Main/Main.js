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

  const [moviesData, setMoviesData] = useState([]); // 영화 정보를 담을 상태
  //const [code, setCode] = useState("");

  let { code } = useParams();
  console.log("code>>>", code);

  useEffect(() => {
    const fetchDailyBoxoffice = async () => {
      try {
        const response = await axios
          .get(`/home`)
          .then((response) => response.data.dailyboxoffice); // 코드로부터 영화 정보 가져오기
        console.log("Test", response);
        setMoviesData(response); // 받아온 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchDailyBoxoffice(); // 영화 정보를 가져오는 함수 호출
  }, []);

  return (
    <>
      <m.MainPage>
        <m.MainPageContainer>
          <m.Comments>
            <m.CommentHeader>
              <m.CommentHeaderName>지금 뜨는 코멘트</m.CommentHeaderName>
              <m.CommentLink to="/playground/comments">
                더보기 {">"}
              </m.CommentLink>
            </m.CommentHeader>

            <m.BoxContainer>
              <m.BoxList>
                <m.Box>
                  <m.BoxContents>
                    <m.CommentBox to="/playground/comments">
                      <m.BoxTitle>
                        <m.BoxTitleContainer>
                          <m.UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></m.UserImage>
                          <m.UserName>userName</m.UserName>
                        </m.BoxTitleContainer>
                        <m.MovieRate>userRate</m.MovieRate>
                      </m.BoxTitle>

                      <m.BoxBodyContainer>
                        <m.MoviePoster
                          to
                          src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                          alt="poster"
                        ></m.MoviePoster>
                        <m.MovieComment>
                          <m.MovieName>movieName</m.MovieName>
                          <m.UserComment>userComment</m.UserComment>
                        </m.MovieComment>
                      </m.BoxBodyContainer>

                      <m.DividingLine></m.DividingLine>
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
                            userCommentCommentCnt
                          </m.UserCommentCommentCnt>
                        </m.UserCommentComment>
                      </m.ActiveArea>
                    </m.CommentBox>
                  </m.BoxContents>
                </m.Box>

                <m.Box>
                  <m.BoxContents>
                    <m.CommentBox to="/playground/comments">
                      <m.BoxTitle>
                        <m.BoxTitleContainer>
                          <m.UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></m.UserImage>
                          <m.UserName>userName</m.UserName>
                        </m.BoxTitleContainer>
                        <m.MovieRate>userRate</m.MovieRate>
                      </m.BoxTitle>

                      <m.BoxBodyContainer>
                        <m.MoviePoster
                          to
                          src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                          alt="poster"
                        ></m.MoviePoster>
                        <m.MovieComment>
                          <m.MovieName>movieName</m.MovieName>
                          <m.UserComment>userComment</m.UserComment>
                        </m.MovieComment>
                      </m.BoxBodyContainer>

                      <m.DividingLine></m.DividingLine>
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
                            userCommentCommentCnt
                          </m.UserCommentCommentCnt>
                        </m.UserCommentComment>
                      </m.ActiveArea>
                    </m.CommentBox>
                  </m.BoxContents>
                </m.Box>

                <m.Box>
                  <m.BoxContents>
                    <m.CommentBox to="/playground/comments">
                      <m.BoxTitle>
                        <m.BoxTitleContainer>
                          <m.UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></m.UserImage>
                          <m.UserName>userName</m.UserName>
                        </m.BoxTitleContainer>
                        <m.MovieRate>userRate</m.MovieRate>
                      </m.BoxTitle>

                      <m.BoxBodyContainer>
                        <m.MoviePoster
                          to
                          src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                          alt="poster"
                        ></m.MoviePoster>
                        <m.MovieComment>
                          <m.MovieName>movieName</m.MovieName>
                          <m.UserComment>userComment</m.UserComment>
                        </m.MovieComment>
                      </m.BoxBodyContainer>

                      <m.DividingLine></m.DividingLine>
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
                            userCommentCommentCnt
                          </m.UserCommentCommentCnt>
                        </m.UserCommentComment>
                      </m.ActiveArea>
                    </m.CommentBox>
                  </m.BoxContents>
                </m.Box>

                <m.Box>
                  <m.BoxContents>
                    <m.CommentBox to="/playground/comments">
                      <m.BoxTitle>
                        <m.BoxTitleContainer>
                          <m.UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></m.UserImage>
                          <m.UserName>userName</m.UserName>
                        </m.BoxTitleContainer>
                        <m.MovieRate>userRate</m.MovieRate>
                      </m.BoxTitle>

                      <m.BoxBodyContainer>
                        <m.MoviePoster
                          to
                          src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                          alt="poster"
                        ></m.MoviePoster>
                        <m.MovieComment>
                          <m.MovieName>movieName</m.MovieName>
                          <m.UserComment>userComment</m.UserComment>
                        </m.MovieComment>
                      </m.BoxBodyContainer>

                      <m.DividingLine></m.DividingLine>
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
                            userCommentCommentCnt
                          </m.UserCommentCommentCnt>
                        </m.UserCommentComment>
                      </m.ActiveArea>
                    </m.CommentBox>
                  </m.BoxContents>
                </m.Box>
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
                {moviesData &&
                  moviesData.map((movie) => (
                    <m.Movie>
                      <m.MovieRanking>
                        <m.Ranking>ranking</m.Ranking>
                      </m.MovieRanking>
                      <m.PosterLink to="/home/movie/detail/${code}">
                        <m.Poster scr={movie.poster} alt="포스터"></m.Poster>
                      </m.PosterLink>
                      <m.MovieNameKor>{movie.name_kor}</m.MovieNameKor>
                      <m.MovieInfo>
                        <m.MovieReleaseAt>{movie.release_at}</m.MovieReleaseAt>
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
