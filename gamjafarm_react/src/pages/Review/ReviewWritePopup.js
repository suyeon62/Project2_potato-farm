import React, { useEffect, useState } from "react";
import axios from "axios";
import * as m from "../../Styles/Review/ReviewWritePopupStyle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { reviewActions } from "../../toolkit/actions/review_action";

const ReviewWritePopup = (props) => {
  const [moviesData, setMoviesData] = useState([]); // 영화 정보를 담을 상태

  const { code } = useParams();
  //   console.log("code>>>>", code);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const response = await axios.get(`/home/movie/detail/${code}`); // 코드로부터 영화 정보 가져오기
        setMoviesData(response.data); // 받아온 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMoviesData(); // 영화 정보를 가져오는 함수 호출
  }, []);

  const [popupOpen, setPopupOpen] = useState(); //팝업

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [inputs, setInputs] = useState({
    content: "",
  });
  const { content } = inputs;
  const reviewDetail = useSelector((state) => state.review.reviewDetail);

  const handleValueChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = { user_id: "test", review: content, movie_code: code };
    // formData.append("user_id", localStorage.getItem("user_id"));

    console.log("formData", formData); //데이터 확인용

    await dispatch(reviewActions.getReviewWrite(formData));

    setInputs({
      content: "",
    });

    navigator(`/playground/review/1`);
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    // setPopupOpen(false);
    props.closePopup();
  };

  return (
    <>
      <m.Popup>
        {/* 팝업 닫기 버튼 */}
        <m.CloseBtn onClick={closePopup}>X 닫기</m.CloseBtn>
        {/* 팝업 내용 */}
        <m.CommentMenu>{moviesData.name_kor}</m.CommentMenu>
        <form onSubmit={onSubmit}>
          <m.TextContainer>
            <m.Textarea
              name="content"
              placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
              onChange={handleValueChange}
            ></m.Textarea>
          </m.TextContainer>
          <m.WrapSave>
            <m.SaveBtn
              style={{ opacity: content ? 1 : 0.5 }}
              type="submit"
              value="등록"
              onSubmit={onSubmit}
            >
              저장
            </m.SaveBtn>
          </m.WrapSave>
        </form>
      </m.Popup>
    </>
  );
};

export default ReviewWritePopup;
