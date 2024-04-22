import React, { useEffect, useState } from "react";
import axios from "axios";
import * as m from "../../Styles/Movie/MovieGenreStyle";
import { useParams } from "react-router-dom";

const MovieGenre = () => {
  const [genreData, setGenreData] = useState([]);

  const { genre, currentPage } = useParams();
  console.log("genre>>>>", genreData);
  console.log("current>>", currentPage);

  useEffect(() => {
    const fetchGenreData = async () => {
      try {
        const genreResponse = await axios.get(
          `/home/movie/${genre}/${currentPage}`
        );
        setGenreData(genreResponse.data);
        console.log("genre", genreData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchGenreData(); // 영화 정보를 가져오는 함수 호출
  }, [genre, currentPage]);

  // const genres = [
  //   "드라마",
  //   "다큐멘터리",
  //   "멜로/로맨스",
  //   "공연",
  //   "애니메이션",
  //   "판타지",
  //   "범죄",
  //   "액션",
  //   "공포(호러)",
  //   "코미디",
  //   "스릴러",
  //   "어드벤처",
  //   "미스터리",
  //   "가족",
  //   "전쟁",
  //   "사극",
  //   "SF",
  //   "뮤지컬",
  //   "서부극(웨스턴)",
  //   "기타",
  // ];

  return (
    <>
      <m.MovieGenreContainer>
        <m.WrapMovieGenre>
          <m.MovieGenreTitleContainer>
            <m.MovieGenreTitle>{genre}</m.MovieGenreTitle>
          </m.MovieGenreTitleContainer>

          <m.WrapMovie>
            {genreData.map((genre) => (
              <m.Movie key={genre.code}>
                <m.PosterLink to={`/movie/${genre.code}`}>
                  <m.Poster to src={genre.poster} alt="poster"></m.Poster>
                </m.PosterLink>
                <m.MovieNameKor>{genre.name_kor}</m.MovieNameKor>
                <m.MovieInfo>
                  <m.MovieReleaseAt>
                    {" "}
                    {genre.release_at.slice(0, genre.release_at.indexOf("T"))}
                  </m.MovieReleaseAt>
                  <m.MovieCountry>{genre.country}</m.MovieCountry>
                </m.MovieInfo>
                <m.Rate>평균★ {genre.rate_avg}</m.Rate>
              </m.Movie>
            ))}
          </m.WrapMovie>
        </m.WrapMovieGenre>
      </m.MovieGenreContainer>
    </>
  );
};

export default MovieGenre;
