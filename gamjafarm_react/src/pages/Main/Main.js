import React from "react";
import styled from "styled-components";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import { Link } from "react-router-dom";

const MainPage = styled.div`
  background-color: #212529;
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainPageContainer = styled.div`
  width: 1320px;
`;

const BoxOffice = styled.div``;
const Comments = styled.div`
  margin-bottom: 42px;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const CommentHeaderName = styled.div`
  font-size: 22px;
  font-weight: 700;
  padding: 12px 0 14px;
`;

const More = styled(Link)`
  text-decoration: none;
  color: rgb(116, 116, 123);
  font-size: 15px;
  font-weight: 400;
  padding-bottom: 14px;
  cursor: pointer;
`;

const BoxContainer = styled.div`
  overflow: scroll;
  display: block;
  scrollbar-width: none;
`;

const BoxList = styled.ul`
  overflow: visible;
  position: relative;
  color: rgb(0, 0, 0);
  column-gap: 16px;
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Box = styled.li`
  display: list-item;
  flex-basis: auto;
  width: 429.328px;
  height: 182px;
  flex-shrink: 0;
  background-color: #00000090;
`;

const BoxContents = styled.div`
  border: 1px solid #ededed;
  border-radius: 5px;
  padding: 11px;
`;

const CommentBox = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
`;

const BoxTitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
`;

const UserImage = styled.img`
  border: 1.5 solid #ededed;
  border-radius: 50%;
  background-color: #b9babe;
  margin-right: 4px;
`;

const UserName = styled.div`
  color: #ededed;
`;

const MovieRate = styled.div`
  color: #ededed;
`;

const BoxBodyContainer = styled.div`
  display: flex;
  padding: 12px 0;
`;

const MoviePoster = styled.img`
  width: 57px;
  margin-right: 8px;
`;

const MovieComment = styled.div``;

const MovieName = styled.div`
  color: #ffffff;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 4px;
`;

const UserComment = styled.div`
  color: #ededed;
  font-weight: 400;
  font-size: 15px;
`;

const DividingLine = styled.div`
  height: 1px;
  background-color: rgb(237, 237, 237);
  margin-bottom: 9px;
  line-height: 18.4px;
`;

const ActiveArea = styled.div`
  display: flex;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #ededed;
`;

const LikeImg = styled.img`
  width: 16px;
  margin-right: 4px;
`;

const LikeCnt = styled.div`
  font-size: 14px;
`;

const UserCommentComment = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #ededed;
`;

const UserCommentCommentImg = styled.img`
  width: 16px;
  margin-right: 4px;
`;

const UserCommentCommentCnt = styled.div`
  font-size: 14px;
`;

const Main = () => {
  return (
    <>
      <MainPage>
        <MainPageContainer>
          <BoxOffice></BoxOffice>
          <Comments>
            <CommentHeader>
              <CommentHeaderName>지금 뜨는 코멘트</CommentHeaderName>
              <More to="/comments">더보기 {">"}</More>
            </CommentHeader>

            <BoxContainer>
              <BoxList>
                <Box>
                  <BoxContents>
                    <CommentBox to="/comments">
                      <BoxTitle>
                        <BoxTitleContainer>
                          <UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></UserImage>
                          <UserName>userName</UserName>
                        </BoxTitleContainer>
                        <MovieRate>userRate</MovieRate>
                      </BoxTitle>

                      <BoxBodyContainer>
                        <MoviePoster
                          to
                          src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                          alt="poster"
                        ></MoviePoster>
                        <MovieComment>
                          <MovieName>movieName</MovieName>
                          <UserComment>userComment</UserComment>
                        </MovieComment>
                      </BoxBodyContainer>

                      <DividingLine></DividingLine>
                      <ActiveArea>
                        <Like>
                          <LikeImg
                            src={likeImage}
                            alt="좋아요 이미지"
                          ></LikeImg>
                          <LikeCnt>likeCnt</LikeCnt>
                        </Like>

                        <UserCommentComment>
                          <UserCommentCommentImg
                            src={commentImage}
                            alt="댓글 이미지"
                          ></UserCommentCommentImg>
                          <UserCommentCommentCnt>
                            userCommentCommentCnt
                          </UserCommentCommentCnt>
                        </UserCommentComment>
                      </ActiveArea>
                    </CommentBox>
                  </BoxContents>
                </Box>

                <Box>
                  <BoxContents>
                    <CommentBox to="/comments">
                      <BoxTitle>
                        <BoxTitleContainer>
                          <UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></UserImage>
                          <UserName>userName</UserName>
                        </BoxTitleContainer>
                        <MovieRate>userRate</MovieRate>
                      </BoxTitle>

                      <BoxBodyContainer>
                        <MoviePoster
                          to
                          src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                          alt="poster"
                        ></MoviePoster>
                        <MovieComment>
                          <MovieName>movieName</MovieName>
                          <UserComment>userComment</UserComment>
                        </MovieComment>
                      </BoxBodyContainer>

                      <DividingLine></DividingLine>
                      <ActiveArea>
                        <Like>
                          <LikeImg
                            src={likeImage}
                            alt="좋아요 이미지"
                          ></LikeImg>
                          <LikeCnt>likeCnt</LikeCnt>
                        </Like>

                        <UserCommentComment>
                          <UserCommentCommentImg
                            src={commentImage}
                            alt="댓글 이미지"
                          ></UserCommentCommentImg>
                          <UserCommentCommentCnt>
                            userCommentCommentCnt
                          </UserCommentCommentCnt>
                        </UserCommentComment>
                      </ActiveArea>
                    </CommentBox>
                  </BoxContents>
                </Box>

                <Box>
                  <BoxContents>
                    <CommentBox to="/comments">
                      <BoxTitle>
                        <BoxTitleContainer>
                          <UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></UserImage>
                          <UserName>userName</UserName>
                        </BoxTitleContainer>
                        <MovieRate>userRate</MovieRate>
                      </BoxTitle>

                      <BoxBodyContainer>
                        <MoviePoster
                          to
                          src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                          alt="poster"
                        ></MoviePoster>
                        <MovieComment>
                          <MovieName>movieName</MovieName>
                          <UserComment>userComment</UserComment>
                        </MovieComment>
                      </BoxBodyContainer>

                      <DividingLine></DividingLine>
                      <ActiveArea>
                        <Like>
                          <LikeImg
                            src={likeImage}
                            alt="좋아요 이미지"
                          ></LikeImg>
                          <LikeCnt>likeCnt</LikeCnt>
                        </Like>

                        <UserCommentComment>
                          <UserCommentCommentImg
                            src={commentImage}
                            alt="댓글 이미지"
                          ></UserCommentCommentImg>
                          <UserCommentCommentCnt>
                            userCommentCommentCnt
                          </UserCommentCommentCnt>
                        </UserCommentComment>
                      </ActiveArea>
                    </CommentBox>
                  </BoxContents>
                </Box>

                <Box>
                  <BoxContents>
                    <CommentBox to="/comments">
                      <BoxTitle>
                        <BoxTitleContainer>
                          <UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></UserImage>
                          <UserName>userName</UserName>
                        </BoxTitleContainer>
                        <MovieRate>userRate</MovieRate>
                      </BoxTitle>

                      <BoxBodyContainer>
                        <MoviePoster
                          to
                          src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                          alt="poster"
                        ></MoviePoster>
                        <MovieComment>
                          <MovieName>movieName</MovieName>
                          <UserComment>userComment</UserComment>
                        </MovieComment>
                      </BoxBodyContainer>

                      <DividingLine></DividingLine>
                      <ActiveArea>
                        <Like>
                          <LikeImg
                            src={likeImage}
                            alt="좋아요 이미지"
                          ></LikeImg>
                          <LikeCnt>likeCnt</LikeCnt>
                        </Like>

                        <UserCommentComment>
                          <UserCommentCommentImg
                            src={commentImage}
                            alt="댓글 이미지"
                          ></UserCommentCommentImg>
                          <UserCommentCommentCnt>
                            userCommentCommentCnt
                          </UserCommentCommentCnt>
                        </UserCommentComment>
                      </ActiveArea>
                    </CommentBox>
                  </BoxContents>
                </Box>
              </BoxList>
            </BoxContainer>
          </Comments>
        </MainPageContainer>
      </MainPage>
    </>
  );
};

export default Main;
