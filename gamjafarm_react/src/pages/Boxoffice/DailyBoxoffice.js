import React from "react";
import prevButton from "../../images/arrow-left.png";
import nextButton from "../../images/arrow-right.png";
import checkedButton from "../../images/checked.png";
import * as m from "../../Styles/Boxoffice/DailyBoxofficeStyle";

const DailyBoxoffice = () => {
  return (
    <>
      <m.DailyBoxofficeContainer>
        <m.WrapDailyBoxoffice>
          <m.BoxofficeTitleContainer>
            <m.BoxofficeTitle>박스오피스 순위 </m.BoxofficeTitle>
            <m.BoxofficeToggleButton>
              <m.DailyBoxofficeButton>
                <m.DailyBoxofficeButtonIcon
                  to
                  src={checkedButton}
                  alt="체크 버튼"
                ></m.DailyBoxofficeButtonIcon>
                <m.DailyBoxofficeButtonLink to="/boxoffice">
                  일간
                </m.DailyBoxofficeButtonLink>
              </m.DailyBoxofficeButton>
              <m.MonthlyBoxofficeButton to="/boxoffice/monthly">
                월간
              </m.MonthlyBoxofficeButton>
            </m.BoxofficeToggleButton>
          </m.BoxofficeTitleContainer>

          <m.DailyBoxofficeDate>
            <m.PrevButton>
              <m.PrevButtonIcon
                to
                src={prevButton}
                alt="이전 버튼"
              ></m.PrevButtonIcon>
            </m.PrevButton>
            <m.BoxAt>boxAt&nbsp;기준</m.BoxAt>
            <m.NextButton>
              <m.NextButtonIcon
                to
                src={nextButton}
                alt="다음 버튼"
              ></m.NextButtonIcon>
            </m.NextButton>
          </m.DailyBoxofficeDate>
          <m.WrapMovie>
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
        </m.WrapDailyBoxoffice>
      </m.DailyBoxofficeContainer>
    </>
  );
};

export default DailyBoxoffice;
