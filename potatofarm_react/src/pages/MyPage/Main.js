import React from "react";
import styled from "styled-components";
import userImage from "../../images/userImage.png";
import { Link } from "react-router-dom";

//마이메뉴(상단)
const MyMenu = styled.div`
  background-color: #ffd49478;
  width: 70%;
  height: 250px;
  margin: 20px auto;
  align-items: center;
`;

const ProfileFrame = styled.div`
  display: flex;
`;

const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  margin: 40px 20px 20px 50px;
`;

const UserInfo = styled.div`
  margin: 40px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const UserName = styled.div`
  width: 280px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: solid;
  padding: 5px;
`;

const UserPref = styled.div`
  width: 270px;
  font-size: 15px;
  padding: 5px;
`;

const Shortcut = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  margin: 20px 80px;
`;

const ShortcutMenu = styled(Link)`
  text-decoration: none;
  background-color: #ffffffbb;
  border: solid;
  margin: 10px;
`;

// 예매내역(티켓)(하단)
const BookingDetails = styled.div``;

const BookingDetailsBarFrame = styled.div`
  display: flex;
  justify-content: center; /* 가로 방향 가운데 정렬 */
  align-items: center;
`;

const BookingDetailsTitle = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
`;

const BookingDetailsMenu = styled.div`
  margin: 0px 10px;
  font-size: 18px;
  font-weight: bold;
`;

const BookingDetailsButton = styled.div`
  font-size: 12px;
`;

const BookingDetailsFrame = styled.div`
  width: 70%;
  margin: 10px auto;
  margin-bottom: 70px;
  align-items: center;
  border-bottom: solid #00000028;
`;

const BookingDetailsBar = styled.div`
  background-color: #00000028;
  /* border: solid; */
  display: grid;
  grid-template-columns: 0.6fr 1.3fr 1.2fr;
  padding: 8px 0;
`;

const BookingDetailsCol = styled.div`
  margin: 5px 0;
`;

const BookingDetailsContents = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.3fr 1.2fr;
  padding: 15px 5px;
`;
const Col = styled.div``;

const PosterLink = styled(Link)`
  display: flex;
  justify-content: center; /* 좌우 중앙 정렬 */
  align-items: center; /* 상하 중앙 정렬 */
`;
const Poster = styled.img`
  max-width: 90%;
  width: 80%;
  height: 90%; /* RowContents의 90% 높이를 차지하도록 */
  object-fit: contain; /* 이미지가 너무 크면 축소하여 보여주기 */
  margin: auto;
`;

const BookingInfo = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* text-align: center; */
`;

const BookingTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const BookingText = styled.div`
  font-size: 14px;
`;

const Main = () => {
  return (
    <>
      <MyMenu>
        <ProfileFrame>
          <ProfilePic src={userImage} alt="프로필 이미지"></ProfilePic>
          <UserInfo>
            <UserName>userName</UserName>
            <UserPref>userPreference</UserPref>
          </UserInfo>
        </ProfileFrame>
        <Shortcut>
          <Grid>
            <ShortcutMenu to="/mypage/mvwntsee">보고 싶은 영화</ShortcutMenu>
            <ShortcutMenu to="/mypage/mvisaw">내가 본 영화</ShortcutMenu>
            <ShortcutMenu to="/mypage/mycomments">내가 쓴 코멘트</ShortcutMenu>
          </Grid>
        </Shortcut>
      </MyMenu>

      <BookingDetails>
        <BookingDetailsBarFrame>
          <BookingDetailsTitle>
            <BookingDetailsMenu>최근 예매내역 (티켓)</BookingDetailsMenu>
            <BookingDetailsButton>{">>"}더보기</BookingDetailsButton>
          </BookingDetailsTitle>
        </BookingDetailsBarFrame>

        <BookingDetailsFrame>
          <BookingDetailsBar>
            <Col></Col>
            <Col>예매내역</Col>
            <Col>결제정보</Col>
          </BookingDetailsBar>

          <BookingDetailsCol>
            <BookingDetailsContents>
              <PosterLink to="http://www.cgv.co.kr/movies/detail-view/?midx=87947">
                <Poster
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87947/87947_1000.jpg"
                  alt="poster"
                />
              </PosterLink>

              <BookingInfo>
                <BookingTitle>듄-파트2</BookingTitle>
                <BookingText>관람일시 2024.03.25(월)</BookingText>
                <BookingText>상영시간 16:45~19:41</BookingText>
                <BookingText>관람극장 CGV 강남</BookingText>
                <BookingText>상영관 1관 좌석 G-14</BookingText>
                <BookingText>인원 일반 2명</BookingText>

                <dBookingText>예매 번호 0012-3344-5566-789</dBookingText>
              </BookingInfo>

              <Col>세부 결제 정보</Col>
            </BookingDetailsContents>
          </BookingDetailsCol>

          <BookingDetailsCol>
            <BookingDetailsContents>
              <PosterLink to="http://www.cgv.co.kr/movies/detail-view/?midx=88092">
                <Poster
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                  alt="poster"
                />
              </PosterLink>

              <BookingInfo>
                <BookingTitle>듄-파트2</BookingTitle>

                <BookingText>관람일시 2024.03.25(월)</BookingText>
                <BookingText>상영시간 16:45~19:41</BookingText>
                <BookingText>관람극장 CGV 강남</BookingText>
                <BookingText>상영관 1관 좌석 G-14</BookingText>
                <dBookingText>인원 일반 2명</dBookingText>

                <BookingText>예매 번호 0012-3344-5566-789</BookingText>
              </BookingInfo>

              <Col>세부 결제 정보</Col>
            </BookingDetailsContents>
          </BookingDetailsCol>

          <BookingDetailsCol>
            <BookingDetailsContents>
              <PosterLink to="http://www.cgv.co.kr/movies/detail-view/?midx=88077">
                <Poster
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88077/88077_1000.jpg"
                  alt="poster"
                />
              </PosterLink>

              <BookingInfo>
                <BookingTitle>듄-파트2</BookingTitle>

                <BookingText>관람일시 2024.03.25(월)</BookingText>
                <BookingText>상영시간 16:45~19:41</BookingText>
                <BookingText>관람극장 CGV 강남</BookingText>
                <BookingText>상영관 1관 좌석 G-14</BookingText>
                <BookingText>인원 일반 2명</BookingText>

                <BookingText>예매 번호 0012-3344-5566-789</BookingText>
              </BookingInfo>

              <Col>세부 결제 정보</Col>
            </BookingDetailsContents>
          </BookingDetailsCol>
        </BookingDetailsFrame>
      </BookingDetails>
    </>
  );
};

export default Main;
