import React, { useState } from "react";
import styled from "styled-components";
import imageLogo from "../images/logo.png";
import chatbotIcon from "../images/chatbot.png";
import userImage from "../images/userImage.png";

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

const Headers = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
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
  );
};

export default Headers;
