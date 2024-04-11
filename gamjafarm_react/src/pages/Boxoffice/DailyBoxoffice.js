import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DailyBoxoffice = styled.div`
  width: 100%;
  background-color: #212529;
  color: #ededed;
  display: flex;
  justify-content: center;
`;
const DailyBoxofficeContainer = styled.div`
  width: 1320px;
`;
const WrapDailyBoxoffice = styled.div``;
const BoxofficeTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  padding: 12px 0px 14px;
`;
const WrapMovie = styled.ul`
  padding: 0;
`;
const Movie = styled.li`
  width: 20%;
  list-style-type: none;
`;
const MovieRanking = styled.div``;
const PosterLink = styled(Link)``;
const Poster = styled.img`
  width: 100%;
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
const MovieReleaseAt = styled.div``;
const MovieCountry = styled.div``;

const Rate = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const dailyBoxoffice = () => {
  return (
    <>
      <DailyBoxoffice>
        <DailyBoxofficeContainer>
          <WrapDailyBoxoffice>
            <BoxofficeTitle>박스오피스 순위</BoxofficeTitle>
            <WrapMovie>
              <Movie>
                <MovieRanking>rankingNo</MovieRanking>
                <PosterLink to="/movie/${movieName}">
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
                <Rate>rate</Rate>
              </Movie>
            </WrapMovie>
          </WrapDailyBoxoffice>
        </DailyBoxofficeContainer>
      </DailyBoxoffice>
    </>
  );
};

export default dailyBoxoffice;
