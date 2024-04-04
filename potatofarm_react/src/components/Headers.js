import React, { useState } from "react";
import styled from "styled-components";
import imageLogo from "../images/logo.png";
import chatbotIcon from "../images/chatbot.png";
import userImage from "../images/userImage.png";
import { Link } from "react-router-dom";

// header
const HeadersContainer = styled.div`
  background-color: #fff;
  padding: 2px 20px;
  text-align: left;
  border-color: #1d1010;
  // border-bottom-style: solid;
  // border-bottom-width: 2px;
  display: flex;
  align-items: center;

  > a {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const ImageLogo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 5px;
`;

const TextLogo = styled.div`
  background-color: white;
  border-style: none;
  color: #1d1010;
  font-weight: bold;
  text-align: center;
  font-size: 22px;
`;

const RightTopMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const ChatbotIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const LogInButton = styled.button`
  background-color: white;
  border-style: solid;
  border-radius: 35px;
  color: #1d1010;
  padding: 8px 18px;
  text-decoration-color: #342222;
  text-align: center;
  font-size: 16px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
`;

const UserIdButton = styled.button`
  background-color: white;
  border-style: none;
  border-radius: 35px;
  color: #1d1010;
  padding: 2px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
`;

const LogOutButton = styled.button`
  background-color: #1d1010;
  border-style: solid;
  border-radius: 35px;
  color: white;
  padding: 6px 12px;
  text-decoration-color: #342222;
  text-align: center;
  font-size: 12px;
`;

// navigation bar
const Navbar = styled.div`
  overflow: hidden;
  background-color: #333;
  font-family: Arial;
  min-width: 915px;
`;

const Dropdown = styled.div`
  overflow: hidden;
`;

const Dropbtn = styled.button`
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
`;

const RightMenuDropbtn = styled(Link)`
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  text-decoration: none;
  font: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
`;

const MenuBar = styled.div`
  display: flex;
  align-items: center;
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 20px;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  min-width: 915px;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  /* padding: 0px 48px; 위아래, 양옆 */
  animation: slideDown 1s ease forwards;

  ${Navbar}:hover & {
    display: block;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;

const LeftMenuContent = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  // margin-left: 20px;
`;

const RightMenuContent = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  margin-left: auto;
  // margin-right: 20px;
`;

const Column = styled.div`
  /* width: 20%; */
  padding: 10px;
  /* background-color: #ccc; */
  height: 240px;
  text-align: center;
  // margin-right: 20px;
  padding: 0px 45px;
`;

const ColumnHeading = styled(Link)`
  color: black;
  padding: 10px;
  margin: 5px;
  text-decoration: none;
  text-align: center;
`;

const ColumnLink = styled(Link)`
  float: none;
  color: black;
  padding: 10px;
  font-size: 13px;
  text-decoration: none;
  display: block;
  text-align: center;

  &:hover {
    text-decoration: underline;
    /* background-color: #ddd; */
  }
`;

const Headers = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {/* header */}
      <HeadersContainer>
        <a href="#">
          <Logo>
            <ImageLogo src={imageLogo} alt="로고" />
            <TextLogo>감자밭</TextLogo>
          </Logo>
        </a>
        <RightTopMenu>
          <ChatbotIcon src={chatbotIcon} alt="챗봇" />
          {isLoggedIn ? (
            <User>
              <UserImage src={userImage} alt="유저이미지" />
              <UserIdButton>UserName</UserIdButton>
              <LogOutButton onClick={handleLogout}>로그아웃</LogOutButton>
            </User>
          ) : (
            <LogInButton onClick={handleLogin}>로그인</LogInButton>
          )}
        </RightTopMenu>
      </HeadersContainer>

      {/* navigation bar */}
      <Navbar>
        <Dropdown>
          <MenuBar>
            <LeftMenu>
              <Dropbtn>movie</Dropbtn>
              <Dropbtn>review</Dropbtn>
              <Dropbtn>booking</Dropbtn>
              <Dropbtn>box-office</Dropbtn>
            </LeftMenu>
            <RightMenu>
              <RightMenuDropbtn to="/mypage">My-page</RightMenuDropbtn>
            </RightMenu>
          </MenuBar>

          <DropdownContent>
            <Row>
              <LeftMenuContent>
                <Column>
                  <ColumnHeading>movie</ColumnHeading>
                  <ColumnLink>Link1</ColumnLink>
                  <ColumnLink>Link2</ColumnLink>
                  <ColumnLink>Link3</ColumnLink>
                </Column>

                <Column>
                  <ColumnHeading>review</ColumnHeading>
                  <ColumnLink>Link1</ColumnLink>
                  <ColumnLink>Link2</ColumnLink>
                  <ColumnLink>Link3</ColumnLink>
                </Column>

                <Column>
                  <ColumnHeading>booking</ColumnHeading>
                  <ColumnLink>Link1</ColumnLink>
                  <ColumnLink>Link2</ColumnLink>
                  <ColumnLink>Link3</ColumnLink>
                </Column>

                <Column>
                  <ColumnHeading>box-office</ColumnHeading>
                  <ColumnLink>Link1</ColumnLink>
                  <ColumnLink>Link2</ColumnLink>
                  <ColumnLink>Link3</ColumnLink>
                </Column>
              </LeftMenuContent>

              <RightMenuContent>
                <Column>
                  <ColumnHeading to="/mypage">My_page</ColumnHeading>
                  <ColumnLink to="/mypage/mytickets">
                    예매 내역(티켓)
                  </ColumnLink>
                  <ColumnLink to="/mypage/mvwntsee">보고 싶은 영화</ColumnLink>
                  <ColumnLink to="/mypage/mvisaw">내가 본 영화</ColumnLink>
                  <ColumnLink to="/mypage/mycomments">
                    내가 쓴 코멘트
                  </ColumnLink>
                  <ColumnLink>회원정보 수정</ColumnLink>
                  <ColumnLink>로그아웃</ColumnLink>
                </Column>
              </RightMenuContent>
            </Row>
          </DropdownContent>
        </Dropdown>
      </Navbar>

      <div class="login"></div>
    </>
  );
};

export default Headers;
