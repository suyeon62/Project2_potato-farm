import React, { useRef, useState } from "react";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import arrowleft from "../../images/arrow-left.png";
import arrowright from "../../images/arrow-right.png";
import { scrollLeft, scrollRight } from "../../Hook/scrollFunctions";
import * as m from "../../Styles/Main/MainStyle";

const Main = () => {
  const movieListRef = useRef(null);

  // const scrollLeft = () => {
  //   movieListRef.current.scrollBy({
  //     left: -1320, // 스크롤 이동 거리 조정
  //     behavior: "smooth", // 부드러운 스크롤 적용
  //   });
  // };

  // const scrollRight = () => {
  //   movieListRef.current.scrollBy({
  //     left: 1320, // 스크롤 이동 거리 조정
  //     behavior: "smooth", // 부드러운 스크롤 적용
  //   });
  // };

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
                <m.Movie>
                  <m.MovieRanking>
                    <m.Ranking>ranking</m.Ranking>
                  </m.MovieRanking>
                  <m.PosterLink to="/movie/${movieCode}">
                    <m.Poster
                      to
                      src="https://an2-img.amz.wtchn.net/image/v2/XqWZa9ZYN4q5Zh8zpIGeyA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJMk5UTXhNalk1T0RReE5ESTBPU0o5LmhVS3lCcVdremR3SS1FNHlVTmFNeFdMb0tsNGZNZkZ6b3VGX3J2c0pLZzA"
                      alt="poster"
                    ></m.Poster>
                  </m.PosterLink>
                  <m.MovieNameKor>movieNameKor</m.MovieNameKor>
                  <m.MovieInfo>
                    <m.MovieReleaseAt>releaseAt</m.MovieReleaseAt>
                    <m.MovieCountry>country</m.MovieCountry>
                  </m.MovieInfo>
                  <m.Rate>평균★ rate</m.Rate>
                </m.Movie>

                <m.Movie>
                  <m.MovieRanking>
                    <m.Ranking>ranking</m.Ranking>
                  </m.MovieRanking>
                  <m.PosterLink to="/movie/${movieCode}">
                    <m.Poster
                      to
                      src="https://an2-img.amz.wtchn.net/image/v2/XqWZa9ZYN4q5Zh8zpIGeyA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJMk5UTXhNalk1T0RReE5ESTBPU0o5LmhVS3lCcVdremR3SS1FNHlVTmFNeFdMb0tsNGZNZkZ6b3VGX3J2c0pLZzA"
                      alt="poster"
                    ></m.Poster>
                  </m.PosterLink>
                  <m.MovieNameKor>movieNameKor</m.MovieNameKor>
                  <m.MovieInfo>
                    <m.MovieReleaseAt>releaseAt</m.MovieReleaseAt>
                    <m.MovieCountry>country</m.MovieCountry>
                  </m.MovieInfo>
                  <m.Rate>평균★ rate</m.Rate>
                </m.Movie>
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
