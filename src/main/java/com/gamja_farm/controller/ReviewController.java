package com.gamja_farm.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.dto.ReviewDTO;
import com.gamja_farm.dto.PageDTO;
import com.gamja_farm.service.ReviewService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Slf4j
@CrossOrigin("*")
@RestController
public class ReviewController {

	@Autowired
	private ReviewService reviewService;

	@Autowired
	private PageDTO PageDTO;
	private int currentPage;

	public ReviewController() {

	}

	@GetMapping("/review/list/{currentPage}")
	public ResponseEntity<Map<String, Object>> listExcute(@PathVariable("currentPage") int currentPage) {
		Map<String,Object> map = new HashMap<>();
		int totalRecord =reviewService.countpageProcess();

		log.info("totalRecord:{}", totalRecord); 

		if (totalRecord >= 1) {
			this.currentPage = currentPage;
			this.PageDTO = new PageDTO(this.currentPage = currentPage, totalRecord);
			List<ReviewDTO> reviewList = reviewService.viewListProcess(PageDTO);
			map.put("viewList", reviewService.viewListProcess(PageDTO));
			map.put("pageInfo", this.PageDTO);
		}

		log.info("viewList:{}", map.get("viewList"));
		return ResponseEntity.ok(map);
	}

	
	@PostMapping("/review/write")
	public ResponseEntity<String> writeReview (ReviewDTO dto,HttpServletRequest req, HttpSession session) {
		// String user_id = (String) session.getAttribute("user_id"); // session에 설정된 id값 가지고와서 user_id로 사용하는거
		dto.getUser_id();
		log.info("user_id:{}, content:{}",dto.getUser_id(), dto.getReview());
		reviewService.writeReivewProcess(dto);
		return ResponseEntity.ok(String.valueOf(1)); 
	}



	// 전체 리뷰 리스트 뽑아오는거
	@GetMapping("/review")
	public ResponseEntity<Map<String, Object>> viewList(@RequestParam(value = "page", defaultValue = "1") int currentPage) {
			// PageDTO 객체 생성 및 초기화
			PageDTO pageDTO = new PageDTO(currentPage, reviewService.countpageProcess());

		  log.info("\n\n Check \n\n");
			System.out.println(pageDTO.getStartRow());
			
			// 서비스 계층에 PageDTO 전달하여 리뷰 목록 가져오기
			List<ReviewDTO> reviewList = reviewService.viewListProcess(pageDTO);

			log.info("\n\n Check \n\n");
			
			// 페이징 정보와 리뷰 목록을 Map에 담아 반환
			Map<String, Object> result = new HashMap<>();
			result.put("pageInfo", pageDTO);
			result.put("reviewList", reviewList);
			
			return ResponseEntity.ok(result);
	}





	// ID로 리뷰 리스트 뽑아오는거
	@GetMapping("/review/{user_id}")
	public ResponseEntity<Map<String, Object>> getMyReview(@PathVariable("user_id") String user_id, 
																												@RequestParam(value = "page", defaultValue = "1") int currentPage) {
			// PageDTO 객체 생성 및 초기화
			PageDTO pageDTO = new PageDTO(currentPage, reviewService.countMyReview(user_id));

		  log.info("\n\n Check \n\n");
			System.out.println(pageDTO.getStartRow());
			
			// 서비스 계층에 PageDTO 전달하여 리뷰 목록 가져오기
			List<ReviewDTO> reviewList = reviewService.showMyReviewProcess(user_id, pageDTO);

			log.info("\n\n Check \n\n");
			
			// 페이징 정보와 리뷰 목록을 Map에 담아 반환
			Map<String, Object> result = new HashMap<>();
			result.put("pageInfo", pageDTO);
			result.put("reviewList", reviewList);
			
			return ResponseEntity.ok(result);
	}



	

	@GetMapping("/review/view/{idx}")
	public ResponseEntity<ReviewDTO> showContent(@PathVariable("idx") int idx) {
		ReviewDTO DTO = reviewService.contentProcess(idx);
		return ResponseEntity.ok(DTO);
	}

	@PutMapping("/review/update/{idx}")
	public ResponseEntity<Object> updateReview(@PathVariable("idx") int idx, ReviewDTO dto,HttpServletRequest req) {
		// dto.getUser_id();    
		reviewService.updateReivewProcess(dto);
		return ResponseEntity.ok(null);
	}

	@DeleteMapping("/review/delete/{idx}")
	public ResponseEntity<Object> deleteReview(@PathVariable("idx") int idx) {
		reviewService.deleteReviewProcess(idx);
		return ResponseEntity.ok(null);
	}

} // end class
