package com.gamja_farm.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.service.MypageSubService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin("*")
@Slf4j
@RestController
public class MypageSubController {

	@Autowired
	private MypageSubService mypageSubService;

	public MypageSubController() {
		
	}

	@PostMapping("/mypage/main/{id}")
	public ResponseEntity<Map<String, Object>> allExecute(@PathVariable("id") String id) {
	
		List<String> movieReviews = mypageSubService.movieReviewProcess(id);
		List<String> movieRatings = mypageSubService.movieRatingProcess(id);
		String moviePython = mypageSubService.moviePythonProcess(id);
		String movieWatchingTime = mypageSubService.movieWatchingTimeProcess(id);

		HashMap<String, Object> mypageSubData = new HashMap<>();
		mypageSubData.put("movieReviews", movieReviews != null ? movieReviews : new ArrayList<String>());
		mypageSubData.put("movieRatings", movieRatings != null ? movieRatings : new ArrayList<String>());
		mypageSubData.put("moviePython", moviePython != null ? moviePython : "");
		mypageSubData.put("movieWatchingTime", movieWatchingTime != null ? movieWatchingTime : "");

		return ResponseEntity.ok(mypageSubData);

	}

}
