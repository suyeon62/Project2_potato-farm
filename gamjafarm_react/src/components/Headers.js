import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import searchIcon from "../images/searchIcon.png";
import userIcon from "../images/userIcon.png";
import { Link } from "react-router-dom";

const Navbar = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 25px;
`;

const Logo = styled.img`
  width: 150px;
  height: 22px;
`;

const Dropdown = styled.div`
  width: 400px;
  min-width: 280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const MenuBar = styled.div`
  position: relative;
  padding: 0 10px;
  /* display: flex; */
  justify-content: space-between;
  align-items: center; /* 세로 가운데 정렬 추가 */
  cursor: pointer;
`;

const Dropbtn = styled.button`
  font-size: 15px;
  border: none;
  color: #a5a5aa;
  font-weight: bold;
  background-color: inherit;
`;

const DropdownBox = styled.div`
  display: none;
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, 5px); /* 가로와 세로 모두 중앙으로 이동 */
  width: 100px;
  background-color: #f9f9f9;
  width: 90px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 1;
  /* padding: 0px 48px; 위아래, 양옆 */
  animation: slideDown 1s ease forwards;

  ${MenuBar}:hover & {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: flex;

  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const ColumnLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: #1c1d1f;
  padding: 5px 0;

  &:hover {
    font-weight: bolder;
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const SearchContainer = styled.div`
  position: relative;
`;

// 검색 아이콘
const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #555; /* 아이콘 색상 */
`;

// 스타일링된 검색 입력란
const SearchInput = styled.input`
  padding: 8px 12px;
  padding-left: 35px; /* 아이콘과 겹치지 않게 왼쪽 패딩 추가 */
  background-color: #f5f5f7;
  border: none;
  border-radius: 2px;
  font-size: 12px;
  width: 290px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: #007bff;
  }
`;

const UserIcon = styled.img`
  border: 1.5 solid #ededed;
  border-radius: 50%;
  background-color: #b9babe;
  margin-left: 10px;
`;

// 이미지를 클릭 가능한 링크로 감싸는 컴포넌트
const UserIconLink = styled(Link)``;

const Headers = () => {
  return (
    <>
      <Navbar>
        <Logo src={logo} alt="로고"></Logo>
        <Dropdown>
          <MenuBar>
            <Dropbtn>영화</Dropbtn>
            <DropdownBox>
              <DropdownContent>
                <ColumnLink>장르</ColumnLink>
                <ColumnLink>다큐</ColumnLink>
                <ColumnLink>스릴</ColumnLink>
              </DropdownContent>
            </DropdownBox>
          </MenuBar>

          <MenuBar>
            <Dropbtn>박스오피스</Dropbtn>
            <DropdownBox>
              <DropdownContent>
                <ColumnLink>일간</ColumnLink>
                <ColumnLink>주간</ColumnLink>
              </DropdownContent>
            </DropdownBox>
          </MenuBar>

          <MenuBar>
            <Dropbtn>플레이그라운드</Dropbtn>
            <DropdownBox>
              <DropdownContent>
                <ColumnLink>공지사항</ColumnLink>
                <ColumnLink>이벤트1</ColumnLink>
                <ColumnLink>이벤트2</ColumnLink>
              </DropdownContent>
            </DropdownBox>
          </MenuBar>
        </Dropdown>

        <UserMenu>
          <SearchContainer>
            <SearchIcon src={searchIcon} alt="검색 아이콘" />
            <SearchInput
              type="search"
              placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
            />
          </SearchContainer>
          <UserIconLink>
            {/* <UserIconLink to="/user-profile"> */}
            <UserIcon src={userIcon} alt="유저 아이콘" />
          </UserIconLink>
        </UserMenu>
      </Navbar>
    </>
  );
};

export default Headers;
