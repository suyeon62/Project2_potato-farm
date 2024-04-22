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

import com.gamja_farm.service.MypageMainService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin("*")
@Slf4j
@RestController
public class MypageMainController {

	@Autowired
	private MypageMainService mypageMainService;

	public MypageMainController() {

	}

	@PostMapping("/mypage/{id}")
	public ResponseEntity<Map<String, Object>> allExecute(@PathVariable("id") String id) {

		int visitDaily = mypageMainService.visitDailyProcess(id);
		int visitTotal = mypageMainService.visitTotalProcess(id);
		String userPic = mypageMainService.userPicProcess(id);
		String userMbti = mypageMainService.userMbtiProcess(id);
		String userCaption = mypageMainService.userCaptionProcess(id);
		List<String> userfollowings = mypageMainService.followingListProcess(id);
		List<String> userfollowers = mypageMainService.followerListProcess(id);

		HashMap<String, Object> mypageMainData = new HashMap<>();
		mypageMainData.put("daliyCnt", visitDaily != 0 ? visitDaily : "");
		mypageMainData.put("totalCnt", visitTotal != 0 ? visitTotal : "");
		mypageMainData.put("userPic", userPic != null ? userPic : "");
		mypageMainData.put("userMbti", userMbti != null ? userMbti : "");
		mypageMainData.put("userCaption", userCaption != null ? userCaption : "");
		mypageMainData.put("userfollowings", userfollowings != null ? userfollowings : new ArrayList<String>());
		mypageMainData.put("userfollowers", userfollowers != null ? userfollowers : new ArrayList<String>());

		return ResponseEntity.ok(mypageMainData);

	}

	// @GetMapping("/userpage/{id}")
	// public ResponseEntity<String> anonExecute() {
	//  	return ResponseEntity.ok(null);
	// }

}
