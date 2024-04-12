import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import prevButton from "../../images/arrow-left.png";
import nextButton from "../../images/arrow-right.png";
import checkedButton from "../../images/checked.png";

const DailyBoxofficeContainer = styled.div`
  width: 100%;
  background-color: #212529;
  color: #ededed;
  display: flex;
  justify-content: center;
`;
const WrapDailyBoxoffice = styled.div`
  width: 1320px;
  padding: 22px 0;
`;
const BoxofficeTitleContainer = styled.div`
  padding: 12px 0px 14px;
  display: flex;
  /* align-items: flex-end; */
  align-items: center;
`;

const BoxofficeTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-right: 20px;
`;

const BoxofficeToggleButton = styled.div`
  display: flex;
  align-items: center;
`;

const DailyBoxofficeButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const DailyBoxofficeButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const DailyBoxofficeButtonLink = styled(Link)`
  text-decoration: none;
  color: rgb(255, 47, 110);
  font-size: 18px;
  font-weight: 600;
`;
const MonthlyBoxofficeButton = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  font-weight: 400;
`;

const DailyBoxofficeDate = styled.div`
  display: flex;
  gap: 5px;
  align-items: center; /* 수직 중앙 정렬 */
`;
const PrevButton = styled.button`
  border: none; /* 테두리 없음 */
  background-color: transparent; /* 배경색 투명 */
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  cursor: pointer;
`;
const PrevButtonIcon = styled.img`
  width: 18px;
  height: 18px;
`;
const BoxAt = styled.div`
  font-size: 13px;
`;
const NextButton = styled.button`
  border: none; /* 테두리 없음 */
  background-color: transparent; /* 배경색 투명 */
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  cursor: pointer;
`;
const NextButtonIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const WrapMovie = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Movie = styled.li`
  width: calc(20% - 12.8px);
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

const DailyBoxoffice = () => {
  return (
    <>
      <DailyBoxofficeContainer>
        <WrapDailyBoxoffice>
          <BoxofficeTitleContainer>
            <BoxofficeTitle>박스오피스 순위 </BoxofficeTitle>
            <BoxofficeToggleButton>
              <DailyBoxofficeButton>
                <DailyBoxofficeButtonIcon
                  to
                  src={checkedButton}
                  alt="체크 버튼"
                ></DailyBoxofficeButtonIcon>
                <DailyBoxofficeButtonLink to="/boxoffice">
                  일간
                </DailyBoxofficeButtonLink>
              </DailyBoxofficeButton>
              <MonthlyBoxofficeButton to="/boxoffice/monthly">
                월간
              </MonthlyBoxofficeButton>
            </BoxofficeToggleButton>
          </BoxofficeTitleContainer>

          <DailyBoxofficeDate>
            <PrevButton>
              <PrevButtonIcon
                to
                src={prevButton}
                alt="이전 버튼"
              ></PrevButtonIcon>
            </PrevButton>
            <BoxAt>boxAt&nbsp;기준</BoxAt>
            <NextButton>
              <NextButtonIcon
                to
                src={nextButton}
                alt="다음 버튼"
              ></NextButtonIcon>
            </NextButton>
          </DailyBoxofficeDate>
          <WrapMovie>
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
        </WrapDailyBoxoffice>
      </DailyBoxofficeContainer>
    </>
  );
};

export default DailyBoxoffice;
