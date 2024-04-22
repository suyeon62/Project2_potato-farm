package com.gamja_farm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import com.gamja_farm.dto.ReviewDTO;
import com.gamja_farm.dto.PageDTO;

import io.lettuce.core.dynamic.annotation.Param;

@Mapper
@Component
public interface ReviewMapper {

	public int countpage();//전체 리스트 페이징처리
	public List<ReviewDTO> viewList(PageDTO viewList);//전체 리스트 반환
	public void readCount(int num); //조회수 카운트
  
	// public List<ReviewDTO> showList(); //게시글 리스트 반환[]
	public List<ReviewDTO> getMyReview(@Param("user_id")String user_id, @Param("pageDTO")PageDTO pageDTO);//id로 내가쓴거 가지고 오기
	public int countMyReview(String user_id);//내가쓴 리뷰 카운트//마이리뷰 페이징에 필요

	public ReviewDTO showContent(int idx);//상세페이지
	public void saveReview(ReviewDTO dto);//저장
	public void updateReview(ReviewDTO dto);//수정
	public void deleteReview(int idx);//삭제

}
