import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Navbar = styled.div`
  font-family: Arial;
  // overflow: hidden;
`;

const Dropdown = styled.div`
  // overflow: hidden;
  position: relative;
  //   overflow: visible;
`;

const MenuBar = styled.div`
  background-color: #333;
  width: 100%;
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 왼쪽 정렬 */
  margin-left: 20px;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* 자동 마진을 이용해 오른쪽 정렬 */
  margin-right: 20px;
`;

const Dropbtn = styled.button`
  margin-right: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font: inherit;
  margin: 0;
  cursor:pointer;
`;

const DropdownContent = styled.div`
  display:flex;
  position: absolute;
  // top: 100%;
  background-color: #f9f9f9;
  width: 100%;
  align-items: center;
  // margin-right: 50px;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  // padding: 0px 48px; /*위아래, 양옆*/

  }
`;

// const Row = styled.div`
//   //   &:after {
//   //     content: "";
//   //     display: table;
//   //     clear: both;
//   //   }
// `;

const LeftMenuContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 왼쪽 정렬 */
  margin-left: 20px;
`;

const RightMenuContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* 자동 마진을 이용해 오른쪽 정렬 */
  margin-right: 20px;
`;

const Column = styled.div`
  //   float: left;
  width: 15%;
  padding: 5px;
  height: 100px;
  padding: 14px 16px;
`;

// const ColumnHeader = styled.h3`
//   color: black;
// `;

const ColumnContents = styled.a`
  color: black;
  text-decoration: none;
  display: block;
  text-align: left;
  margin: 10px
`;

const Navigation = () => {

  return (
    <>
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
              <Dropbtn>My-page</Dropbtn>
            </RightMenu>
          </MenuBar>

          <DropdownContent>
              <LeftMenuContent>
              <Column>
                {/* <ColumnHeader>movie</ColumnHeader> */}
                <ColumnContents>Link1</ColumnContents>
                <ColumnContents>Link2</ColumnContents>
                <ColumnContents>Link3</ColumnContents>
              </Column>

              <Column>
                {/* <ColumnHeader>review</ColumnHeader> */}
                <ColumnContents>Link1</ColumnContents>
                <ColumnContents>Link2</ColumnContents>
                <ColumnContents>Link3</ColumnContents>
              </Column>

              <Column>
                {/* <ColumnHeader>booking</ColumnHeader> */}
                <ColumnContents>Link1</ColumnContents>
                <ColumnContents>Link2</ColumnContents>
                <ColumnContents>Link3</ColumnContents>
              </Column>

              <Column>
                {/* <ColumnHeader>box_office</ColumnHeader> */}
                <ColumnContents>Link1</ColumnContents>
                <ColumnContents>Link2</ColumnContents>
                <ColumnContents>Link3</ColumnContents>
              </Column>
              </LeftMenuContent>

              <RightMenuContent>
              <Column>
                {/* <ColumnHeader>My_page</ColumnHeader> */}
                <ColumnContents>Link1</ColumnContents>
                <ColumnContents>Link2</ColumnContents>
                <ColumnContents>Link3</ColumnContents>
              </Column>
              </RightMenuContent>
          </DropdownContent>
        </Dropdown>
      </Navbar>
    </>
  );
};

export default Navigation;
