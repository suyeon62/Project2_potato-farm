import React from "react";
import styled from "styled-components";

const Movie = styled.div`
  width: 100%;
  background-color: #212529;
  color: #ededed;
  display: flex;
  justify-content: center;
`;

const MoviePage = styled.div`
  width: 1320px;
`;

const MovieInfoContainer = styled.div`
  height: 550px;
  border-bottom: 1px solid white;
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
const MovieContentsContainer = styled.div`
  background-color: #7a7a7a77;
  display: flex;
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
const UserComment = styled.div``;
const BottomContents = styled.div``;
const MoviePlot = styled.div``;
const MoviePeople = styled.div``;
const MoviePeopleTitle = styled.div``;
const MoviePeopleName = styled.div``;
const MovieDirector = styled.div``;
const MovieActor = styled.div``;
const UserReview = styled.div`
  margin-top: 60px;
`;
const UserReviewTitle = styled.div``;
const UserReviewContents = styled.div``;
const Stillcut = styled.div`
  margin-top: 60px;
`;
const StillcutTitle = styled.div``;
const StillcutContents = styled.div``;
const Teaser = styled.div`
  margin-top: 60px;
`;
const TeaserTitle = styled.div``;
const TeaserContents = styled.div``;

const MovieInfo = () => {
  return (
    <>
      <Movie>
        <MoviePage>
          <MovieInfoContainer>
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
          </MovieInfoContainer>

          <MovieContentsContainer>
            <LeftMovieContentsContainer>
              <Poster></Poster>
            </LeftMovieContentsContainer>

            <RightMovieContentsContainer>
              <TopContents>
                <UserMovieRate>userMovieRate</UserMovieRate>
                <Rate>rate</Rate>
                <UserMovieWish>userMovieWish</UserMovieWish>
                <UserComment>userComment</UserComment>
              </TopContents>

              <BottomContents>
                <MoviePlot>moviePlot</MoviePlot>
              </BottomContents>
            </RightMovieContentsContainer>
          </MovieContentsContainer>

          <MoviePeople>
            <MoviePeopleTitle>출연/제작</MoviePeopleTitle>
            <MoviePeopleName>
              <MovieDirector>movieDirector</MovieDirector>
              <MovieActor>movieActor</MovieActor>
            </MoviePeopleName>
          </MoviePeople>

          <UserReview>
            <UserReviewTitle>코멘트</UserReviewTitle>
            <UserReviewContents>userReview</UserReviewContents>
          </UserReview>

          <Stillcut>
            <StillcutTitle>갤러리</StillcutTitle>
            <StillcutContents>stillcut</StillcutContents>
          </Stillcut>

          <Teaser>
            <TeaserTitle>동영상</TeaserTitle>
            <TeaserContents>teaser</TeaserContents>
          </Teaser>
        </MoviePage>
      </Movie>
    </>
  );
};

export default MovieInfo;
