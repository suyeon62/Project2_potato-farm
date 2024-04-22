package com.gamja_farm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamja_farm.dto.ReviewDTO;
import com.gamja_farm.dto.PageDTO;
import com.gamja_farm.mapper.ReviewMapper;

@Service
public class ReviewServiceImp implements ReviewService {
	
	@Autowired
	private ReviewMapper reviewMapper;
  
	public ReviewServiceImp() {
	}
  
	@Override //리뷰 리스트 보여주기
	public List<ReviewDTO> viewListProcess(PageDTO viewList) {
		return reviewMapper.viewList(viewList);
	}

	@Override // 내가 쓴 리뷰만 가지고와서 보여주기
	public List<ReviewDTO> showMyReviewProcess(String user_id, PageDTO pageDTO) {
		
		return reviewMapper.getMyReview(user_id, pageDTO);
	}

	@Override // 내가 작성한 총 리뷰 개수 반환
	public int countMyReview(String user_id) {
		return reviewMapper.countMyReview(user_id);
	}
  
	@Override //리뷰 작성 & 저장
	public void writeReivewProcess(ReviewDTO dto) {
		reviewMapper.saveReview(dto);
	}
  
	@Override // 리뷰 수정
	public void updateReivewProcess(ReviewDTO dto) {
		reviewMapper.updateReview(dto);
	}
	@Override // 리뷰 삭제
	public void deleteReviewProcess(int idx) {
		reviewMapper.deleteReview(idx);
	}
  
	@Override // 총 페이지 숫자 카운팅
	public int countpageProcess() {
		return reviewMapper.countpage();
	}
  
	@Override // 작성한 리뷰 보여주기 & 조회수 증가
	public ReviewDTO contentProcess(int idx) {
	  return reviewMapper.showContent(idx);
	}



}
