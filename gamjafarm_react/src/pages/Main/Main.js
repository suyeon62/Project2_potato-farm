import React, { useRef, useState } from "react";
import styled from "styled-components";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import arrowleft from "../../images/arrow-left.png";
import arrowright from "../../images/arrow-right.png";
import { Link } from "react-router-dom";
import { scrollLeft, scrollRight } from "../../Hook/scrollFunctions";

const MainPage = styled.div`
  background-color: #212529;
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainPageContainer = styled.div`
  width: 1320px;
`;

const Comments = styled.div`
  margin-bottom: 42px;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const CommentHeaderName = styled.div`
  font-size: 22px;
  font-weight: 700;
  padding: 12px 0 14px;
`;

const CommentLink = styled(Link)`
  text-decoration: none;
  color: rgb(116, 116, 123);
  font-size: 15px;
  font-weight: 400;
  padding-bottom: 14px;
  cursor: pointer;
`;

const BoxContainer = styled.div`
  overflow: scroll;
  display: block;
  scrollbar-width: none;
`;

const BoxList = styled.ul`
  overflow: visible;
  position: relative;
  color: rgb(0, 0, 0);
  column-gap: 16px;
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Box = styled.li`
  display: list-item;
  flex-basis: auto;
  width: 429.328px;
  height: 182px;
  flex-shrink: 0;
`;

const BoxContents = styled.div`
  border: 1px solid black;
  background-color: #00000090;
  border-radius: 5px;
  padding: 11px;
`;

const CommentBox = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
`;

const BoxTitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
`;

const UserImage = styled.img`
  border: 1.5 solid #ededed;
  border-radius: 50%;
  background-color: #b9babe;
  margin-right: 4px;
`;

const UserName = styled.div`
  color: #ededed;
`;

const MovieRate = styled.div`
  color: #ededed;
`;

const BoxBodyContainer = styled.div`
  display: flex;
  padding: 12px 0;
`;

const MoviePoster = styled.img`
  width: 57px;
  margin-right: 8px;
`;

const MovieComment = styled.div``;

const MovieName = styled.div`
  color: #ffffff;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 4px;
`;

const UserComment = styled.div`
  color: #ededed;
  font-weight: 400;
  font-size: 15px;
`;

const DividingLine = styled.div`
  height: 1px;
  background-color: rgb(237, 237, 237);
  margin-bottom: 9px;
  line-height: 18.4px;
`;

const ActiveArea = styled.div`
  display: flex;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #ededed;
`;

const LikeImg = styled.img`
  width: 16px;
  margin-right: 4px;
`;

const LikeCnt = styled.div`
  font-size: 14px;
`;

const UserCommentComment = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #ededed;
`;

const UserCommentCommentImg = styled.img`
  width: 16px;
  margin-right: 4px;
`;

const UserCommentCommentCnt = styled.div`
  font-size: 14px;
`;

const Boxoffice = styled.div``;

const BoxofficeHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const BoxofficeHeaderName = styled.div`
  font-size: 22px;
  font-weight: 700;
  padding: 12px 0 14px;
`;

const BoxofficeLink = styled(Link)`
  text-decoration: none;
  color: rgb(116, 116, 123);
  font-size: 15px;
  font-weight: 400;
  padding-bottom: 14px;
  cursor: pointer;
`;
const MovieContainer = styled.div`
  position: relative;
`;

const LeftBtn = styled.div`
  position: absolute;
  left: -15px;
  top: 50%;
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

const WrapMovie = styled.ul`
  padding: 0;
  display: flex;
  overflow-x: scroll;
  -webkit-scrollbar: no-button;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  column-gap: 14px;
  /* margin: 0 32px; */
  scroll-behavior: smooth;
`;

const RightBtn = styled.div`
  position: absolute;
  right: -15px;
  top: 50%;
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

const Movie = styled.li`
  width: calc(20% - 12.8px);
  flex-shrink: 0;
  list-style-type: none;
  margin: 10px 0 40px;
`;
const MovieRanking = styled.div``;
const Ranking = styled.div`
  height: 30px;
  background-color: black;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
`;
const PosterLink = styled(Link)``;
const Poster = styled.img`
  width: 100%;
  border-radius: 5px;
`;
const MovieNameKor = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const MovieInfo = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
`;
const MovieReleaseAt = styled.div`
  margin-right: 5px;
`;
const MovieCountry = styled.div``;

const Rate = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

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
      <MainPage>
        <MainPageContainer>
          <Comments>
            <CommentHeader>
              <CommentHeaderName>지금 뜨는 코멘트</CommentHeaderName>
              <CommentLink to="/playground/comments">더보기 {">"}</CommentLink>
            </CommentHeader>

            <BoxContainer>
              <BoxList>
                <Box>
                  <BoxContents>
                    <CommentBox to="/playground/comments">
                      <BoxTitle>
                        <BoxTitleContainer>
                          <UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></UserImage>
                          <UserName>userName</UserName>
                        </BoxTitleContainer>
                        <MovieRate>userRate</MovieRate>
                      </BoxTitle>

                      <BoxBodyContainer>
                        <MoviePoster
                          to
                          src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                          alt="poster"
                        ></MoviePoster>
                        <MovieComment>
                          <MovieName>movieName</MovieName>
                          <UserComment>userComment</UserComment>
                        </MovieComment>
                      </BoxBodyContainer>

                      <DividingLine></DividingLine>
                      <ActiveArea>
                        <Like>
                          <LikeImg
                            src={likeImage}
                            alt="좋아요 이미지"
                          ></LikeImg>
                          <LikeCnt>likeCnt</LikeCnt>
                        </Like>

                        <UserCommentComment>
                          <UserCommentCommentImg
                            src={commentImage}
                            alt="댓글 이미지"
                          ></UserCommentCommentImg>
                          <UserCommentCommentCnt>
                            userCommentCommentCnt
                          </UserCommentCommentCnt>
                        </UserCommentComment>
                      </ActiveArea>
                    </CommentBox>
                  </BoxContents>
                </Box>

                <Box>
                  <BoxContents>
                    <CommentBox to="/playground/comments">
                      <BoxTitle>
                        <BoxTitleContainer>
                          <UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></UserImage>
                          <UserName>userName</UserName>
                        </BoxTitleContainer>
                        <MovieRate>userRate</MovieRate>
                      </BoxTitle>

                      <BoxBodyContainer>
                        <MoviePoster
                          to
                          src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                          alt="poster"
                        ></MoviePoster>
                        <MovieComment>
                          <MovieName>movieName</MovieName>
                          <UserComment>userComment</UserComment>
                        </MovieComment>
                      </BoxBodyContainer>

                      <DividingLine></DividingLine>
                      <ActiveArea>
                        <Like>
                          <LikeImg
                            src={likeImage}
                            alt="좋아요 이미지"
                          ></LikeImg>
                          <LikeCnt>likeCnt</LikeCnt>
                        </Like>

                        <UserCommentComment>
                          <UserCommentCommentImg
                            src={commentImage}
                            alt="댓글 이미지"
                          ></UserCommentCommentImg>
                          <UserCommentCommentCnt>
                            userCommentCommentCnt
                          </UserCommentCommentCnt>
                        </UserCommentComment>
                      </ActiveArea>
                    </CommentBox>
                  </BoxContents>
                </Box>

                <Box>
                  <BoxContents>
                    <CommentBox to="/playground/comments">
                      <BoxTitle>
                        <BoxTitleContainer>
                          <UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></UserImage>
                          <UserName>userName</UserName>
                        </BoxTitleContainer>
                        <MovieRate>userRate</MovieRate>
                      </BoxTitle>

                      <BoxBodyContainer>
                        <MoviePoster
                          to
                          src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                          alt="poster"
                        ></MoviePoster>
                        <MovieComment>
                          <MovieName>movieName</MovieName>
                          <UserComment>userComment</UserComment>
                        </MovieComment>
                      </BoxBodyContainer>

                      <DividingLine></DividingLine>
                      <ActiveArea>
                        <Like>
                          <LikeImg
                            src={likeImage}
                            alt="좋아요 이미지"
                          ></LikeImg>
                          <LikeCnt>likeCnt</LikeCnt>
                        </Like>

                        <UserCommentComment>
                          <UserCommentCommentImg
                            src={commentImage}
                            alt="댓글 이미지"
                          ></UserCommentCommentImg>
                          <UserCommentCommentCnt>
                            userCommentCommentCnt
                          </UserCommentCommentCnt>
                        </UserCommentComment>
                      </ActiveArea>
                    </CommentBox>
                  </BoxContents>
                </Box>

                <Box>
                  <BoxContents>
                    <CommentBox to="/playground/comments">
                      <BoxTitle>
                        <BoxTitleContainer>
                          <UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></UserImage>
                          <UserName>userName</UserName>
                        </BoxTitleContainer>
                        <MovieRate>userRate</MovieRate>
                      </BoxTitle>

                      <BoxBodyContainer>
                        <MoviePoster
                          to
                          src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                          alt="poster"
                        ></MoviePoster>
                        <MovieComment>
                          <MovieName>movieName</MovieName>
                          <UserComment>userComment</UserComment>
                        </MovieComment>
                      </BoxBodyContainer>

                      <DividingLine></DividingLine>
                      <ActiveArea>
                        <Like>
                          <LikeImg
                            src={likeImage}
                            alt="좋아요 이미지"
                          ></LikeImg>
                          <LikeCnt>likeCnt</LikeCnt>
                        </Like>

                        <UserCommentComment>
                          <UserCommentCommentImg
                            src={commentImage}
                            alt="댓글 이미지"
                          ></UserCommentCommentImg>
                          <UserCommentCommentCnt>
                            userCommentCommentCnt
                          </UserCommentCommentCnt>
                        </UserCommentComment>
                      </ActiveArea>
                    </CommentBox>
                  </BoxContents>
                </Box>
              </BoxList>
            </BoxContainer>
          </Comments>

          <Boxoffice>
            <BoxofficeHeader>
              <BoxofficeHeaderName>박스오피스 순위</BoxofficeHeaderName>
              <BoxofficeLink to="/boxoffice">더보기 {">"}</BoxofficeLink>
            </BoxofficeHeader>

            <MovieContainer>
              <LeftBtn onClick={() => scrollLeft(movieListRef)}>
                <LeftBtnIcon src={arrowleft} alt="왼쪽 이동"></LeftBtnIcon>
              </LeftBtn>
              <WrapMovie ref={movieListRef}>
                <Movie>
                  <MovieRanking>
                    <Ranking>ranking</Ranking>
                  </MovieRanking>
                  <PosterLink to="/movie/${movieCode}">
                    <Poster
                      to
                      src="https://an2-img.amz.wtchn.net/image/v2/XqWZa9ZYN4q5Zh8zpIGeyA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJMk5UTXhNalk1T0RReE5ESTBPU0o5LmhVS3lCcVdremR3SS1FNHlVTmFNeFdMb0tsNGZNZkZ6b3VGX3J2c0pLZzA"
                      alt="poster"
                    ></Poster>
                  </PosterLink>
                  <MovieNameKor>movieNameKor</MovieNameKor>
                  <MovieInfo>
                    <MovieReleaseAt>releaseAt</MovieReleaseAt>
                    <MovieCountry>country</MovieCountry>
                  </MovieInfo>
                  <Rate>평균★ rate</Rate>
                </Movie>

                <Movie>
                  <MovieRanking>
                    <Ranking>ranking</Ranking>
                  </MovieRanking>
                  <PosterLink to="/movie/${movieCode}">
                    <Poster
                      to
                      src="https://an2-img.amz.wtchn.net/image/v2/XqWZa9ZYN4q5Zh8zpIGeyA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJMk5UTXhNalk1T0RReE5ESTBPU0o5LmhVS3lCcVdremR3SS1FNHlVTmFNeFdMb0tsNGZNZkZ6b3VGX3J2c0pLZzA"
                      alt="poster"
                    ></Poster>
                  </PosterLink>
                  <MovieNameKor>movieNameKor</MovieNameKor>
                  <MovieInfo>
                    <MovieReleaseAt>releaseAt</MovieReleaseAt>
                    <MovieCountry>country</MovieCountry>
                  </MovieInfo>
                  <Rate>평균★ rate</Rate>
                </Movie>

                <Movie>
                  <MovieRanking>
                    <Ranking>ranking</Ranking>
                  </MovieRanking>
                  <PosterLink to="/movie/${movieCode}">
                    <Poster
                      to
                      src="https://an2-img.amz.wtchn.net/image/v2/XqWZa9ZYN4q5Zh8zpIGeyA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJMk5UTXhNalk1T0RReE5ESTBPU0o5LmhVS3lCcVdremR3SS1FNHlVTmFNeFdMb0tsNGZNZkZ6b3VGX3J2c0pLZzA"
                      alt="poster"
                    ></Poster>
                  </PosterLink>
                  <MovieNameKor>movieNameKor</MovieNameKor>
                  <MovieInfo>
                    <MovieReleaseAt>releaseAt</MovieReleaseAt>
                    <MovieCountry>country</MovieCountry>
                  </MovieInfo>
                  <Rate>평균★ rate</Rate>
                </Movie>

                <Movie>
                  <MovieRanking>
                    <Ranking>ranking</Ranking>
                  </MovieRanking>
                  <PosterLink to="/movie/${movieCode}">
                    <Poster
                      to
                      src="https://an2-img.amz.wtchn.net/image/v2/XqWZa9ZYN4q5Zh8zpIGeyA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJMk5UTXhNalk1T0RReE5ESTBPU0o5LmhVS3lCcVdremR3SS1FNHlVTmFNeFdMb0tsNGZNZkZ6b3VGX3J2c0pLZzA"
                      alt="poster"
                    ></Poster>
                  </PosterLink>
                  <MovieNameKor>movieNameKor</MovieNameKor>
                  <MovieInfo>
                    <MovieReleaseAt>releaseAt</MovieReleaseAt>
                    <MovieCountry>country</MovieCountry>
                  </MovieInfo>
                  <Rate>평균★ rate</Rate>
                </Movie>

                <Movie>
                  <MovieRanking>
                    <Ranking>ranking</Ranking>
                  </MovieRanking>
                  <PosterLink to="/movie/${movieCode}">
                    <Poster
                      to
                      src="https://an2-img.amz.wtchn.net/image/v2/XqWZa9ZYN4q5Zh8zpIGeyA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJMk5UTXhNalk1T0RReE5ESTBPU0o5LmhVS3lCcVdremR3SS1FNHlVTmFNeFdMb0tsNGZNZkZ6b3VGX3J2c0pLZzA"
                      alt="poster"
                    ></Poster>
                  </PosterLink>
                  <MovieNameKor>movieNameKor</MovieNameKor>
                  <MovieInfo>
                    <MovieReleaseAt>releaseAt</MovieReleaseAt>
                    <MovieCountry>country</MovieCountry>
                  </MovieInfo>
                  <Rate>평균★ rate</Rate>
                </Movie>

                <Movie>
                  <MovieRanking>
                    <Ranking>ranking</Ranking>
                  </MovieRanking>
                  <PosterLink to="/movie/${movieCode}">
                    <Poster
                      to
                      src="https://an2-img.amz.wtchn.net/image/v2/XqWZa9ZYN4q5Zh8zpIGeyA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJMk5UTXhNalk1T0RReE5ESTBPU0o5LmhVS3lCcVdremR3SS1FNHlVTmFNeFdMb0tsNGZNZkZ6b3VGX3J2c0pLZzA"
                      alt="poster"
                    ></Poster>
                  </PosterLink>
                  <MovieNameKor>movieNameKor</MovieNameKor>
                  <MovieInfo>
                    <MovieReleaseAt>releaseAt</MovieReleaseAt>
                    <MovieCountry>country</MovieCountry>
                  </MovieInfo>
                  <Rate>평균★ rate</Rate>
                </Movie>

                <Movie>
                  <MovieRanking>
                    <Ranking>ranking</Ranking>
                  </MovieRanking>
                  <PosterLink to="/movie/${movieCode}">
                    <Poster
                      to
                      src="https://an2-img.amz.wtchn.net/image/v2/XqWZa9ZYN4q5Zh8zpIGeyA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJMk5UTXhNalk1T0RReE5ESTBPU0o5LmhVS3lCcVdremR3SS1FNHlVTmFNeFdMb0tsNGZNZkZ6b3VGX3J2c0pLZzA"
                      alt="poster"
                    ></Poster>
                  </PosterLink>
                  <MovieNameKor>movieNameKor</MovieNameKor>
                  <MovieInfo>
                    <MovieReleaseAt>releaseAt</MovieReleaseAt>
                    <MovieCountry>country</MovieCountry>
                  </MovieInfo>
                  <Rate>평균★ rate</Rate>
                </Movie>

                <Movie>
                  <MovieRanking>
                    <Ranking>ranking</Ranking>
                  </MovieRanking>
                  <PosterLink to="/movie/${movieCode}">
                    <Poster
                      to
                      src="https://an2-img.amz.wtchn.net/image/v2/XqWZa9ZYN4q5Zh8zpIGeyA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJMk5UTXhNalk1T0RReE5ESTBPU0o5LmhVS3lCcVdremR3SS1FNHlVTmFNeFdMb0tsNGZNZkZ6b3VGX3J2c0pLZzA"
                      alt="poster"
                    ></Poster>
                  </PosterLink>
                  <MovieNameKor>movieNameKor</MovieNameKor>
                  <MovieInfo>
                    <MovieReleaseAt>releaseAt</MovieReleaseAt>
                    <MovieCountry>country</MovieCountry>
                  </MovieInfo>
                  <Rate>평균★ rate</Rate>
                </Movie>

                <Movie>
                  <MovieRanking>
                    <Ranking>ranking</Ranking>
                  </MovieRanking>
                  <PosterLink to="/movie/${movieCode}">
                    <Poster
                      to
                      src="https://an2-img.amz.wtchn.net/image/v2/XqWZa9ZYN4q5Zh8zpIGeyA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJMk5UTXhNalk1T0RReE5ESTBPU0o5LmhVS3lCcVdremR3SS1FNHlVTmFNeFdMb0tsNGZNZkZ6b3VGX3J2c0pLZzA"
                      alt="poster"
                    ></Poster>
                  </PosterLink>
                  <MovieNameKor>movieNameKor</MovieNameKor>
                  <MovieInfo>
                    <MovieReleaseAt>releaseAt</MovieReleaseAt>
                    <MovieCountry>country</MovieCountry>
                  </MovieInfo>
                  <Rate>평균★ rate</Rate>
                </Movie>

                <Movie>
                  <MovieRanking>
                    <Ranking>ranking</Ranking>
                  </MovieRanking>
                  <PosterLink to="/movie/${movieCode}">
                    <Poster
                      to
                      src="https://an2-img.amz.wtchn.net/image/v2/XqWZa9ZYN4q5Zh8zpIGeyA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJMk5UTXhNalk1T0RReE5ESTBPU0o5LmhVS3lCcVdremR3SS1FNHlVTmFNeFdMb0tsNGZNZkZ6b3VGX3J2c0pLZzA"
                      alt="poster"
                    ></Poster>
                  </PosterLink>
                  <MovieNameKor>movieNameKor</MovieNameKor>
                  <MovieInfo>
                    <MovieReleaseAt>releaseAt</MovieReleaseAt>
                    <MovieCountry>country</MovieCountry>
                  </MovieInfo>
                  <Rate>평균★ rate</Rate>
                </Movie>
              </WrapMovie>
              <RightBtn onClick={() => scrollRight(movieListRef)}>
                <RightBtnIcon src={arrowright} alt="오른쪽 이동"></RightBtnIcon>
              </RightBtn>
            </MovieContainer>
          </Boxoffice>
        </MainPageContainer>
      </MainPage>
    </>
  );
};

export default Main;
