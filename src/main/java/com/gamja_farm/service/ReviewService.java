package com.gamja_farm.service;

import java.util.List;

import com.gamja_farm.dto.ReviewDTO;
import com.gamja_farm.dto.PageDTO;

public interface ReviewService {

	public int countpageProcess();
	public List<ReviewDTO> viewListProcess(PageDTO viewList);
	// public List<ReviewDTO> showListProcess();
	public List<ReviewDTO> showMyReviewProcess(String user_id, PageDTO pageDTO);
	public int countMyReview(String user_id);
	public ReviewDTO contentProcess(int idx);
	public void writeReivewProcess(ReviewDTO dto);
	public void updateReivewProcess(ReviewDTO dto);
	public void deleteReviewProcess(int idx);

}
