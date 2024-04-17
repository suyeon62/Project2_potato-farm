import React, { useEffect, useState } from "react";
import axios from "axios";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import * as m from "../../Styles/Comments/CommentsMainStyle";

const CommentsMain = () => {
  const [isPopular, setIsPopular] = useState(true);

  const handleToggle = () => {
    setIsPopular(!isPopular);
  };

  const [allMoviesData, setAllMoviesData] = useState([]);
  const [domesticMoviesData, setDomesticMoviesData] = useState([]);
  const [foreignMoviesData, setForeignMoviesData] = useState([]);
  const [animationListData, setAnimationListData] = useState([]);
  const [selectedcode, setSelectedCode] = useState("");
  const [selectedMoviecode, setselectedMoviecode] = useState("");
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

        const commentResponse = await axios
          .get(`/review/list/1`)
          .then((response) => response.data.viewList);
        const movieCodes = commentResponse.map((comment) => comment.movie_code); // 영화 코드들을 추출
        console.log("mvcode", movieCodes);
        setselectedMoviecode(movieCodes);
        console.log("comments", commentResponse);
        setCommentsData(commentResponse);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchDailyBoxoffice(); // 영화 정보를 가져오는 함수 호출
  }, []);

  return (
    <>
      <m.Comments>
        <m.CommentsLayout>
          <m.CommentHeader>지금 뜨는 코멘트</m.CommentHeader>

          <m.ToggleButtons>
            <m.Popular active={isPopular} onClick={handleToggle}>
              인기
            </m.Popular>
            <m.Latest active={!isPopular} onClick={handleToggle}>
              최신
            </m.Latest>
          </m.ToggleButtons>

          <m.MainContents>
            {commentsData &&
              commentsData.map((comment, index) => {
                // commentsData에 있는 각 댓글의 movie_code와 일치하는 영화 정보를 찾습니다.
                const matchedMovie = allMoviesData.find(
                  (movie) => movie.code === comment.movie_code
                );
                // 영화 정보가 있을 경우에만 해당 영화 정보를 이용하여 댓글과 영화 정보를 매칭합니다.
                if (matchedMovie) {
                  return (
                    <m.Box>
                      <m.CommentBox>
                        <m.BoxTitleContainer>
                          <m.BoxTitle to="/mypage">
                            <m.UserImage
                              src={userImage}
                              alt="유저 이미지"
                            ></m.UserImage>
                            <m.UserName>{comment.user_id}</m.UserName>
                          </m.BoxTitle>
                          <m.MovieRate>{comment.userRate}</m.MovieRate>
                        </m.BoxTitleContainer>

                        <m.BoxBodyContainer>
                          <m.PosterLink
                            to={`/movie/${selectedMoviecode[index]}`}
                          >
                            <m.Poster
                              to
                              src={matchedMovie.poster}
                              alt="poster"
                            ></m.Poster>
                          </m.PosterLink>
                          <m.MovieComment
                            to={`/playground/comments/detail/${comment.idx}`}
                          >
                            <m.MovieName>{matchedMovie.name_kor}</m.MovieName>
                            <m.UserComment>{comment.review}</m.UserComment>
                          </m.MovieComment>
                        </m.BoxBodyContainer>
                        <m.Cnt>
                          <m.LikeCnt>좋아요 {comment.like_Cnt}</m.LikeCnt>
                          <m.UserCommentCommentCnt>
                            댓글 userCommentCommentCnt
                          </m.UserCommentCommentCnt>
                        </m.Cnt>

                        <m.DividingLine></m.DividingLine>
                        <m.ActiveArea>
                          <m.LikeImg
                            src={likeImage}
                            alt="좋아요 이미지"
                          ></m.LikeImg>

                          <m.UserCommentCommentImg
                            src={commentImage}
                            alt="댓글 이미지"
                          ></m.UserCommentCommentImg>
                        </m.ActiveArea>
                      </m.CommentBox>
                    </m.Box>
                  );
                } else {
                  return null; // 영화 정보가 없을 경우 해당 댓글은 표시하지 않습니다.
                }
              })}
          </m.MainContents>
        </m.CommentsLayout>
      </m.Comments>
    </>
  );
};

export default CommentsMain;
