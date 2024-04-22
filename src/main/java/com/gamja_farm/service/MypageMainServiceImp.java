package com.gamja_farm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamja_farm.mapper.MypageMainMapper;

@Service
public class MypageMainServiceImp implements MypageMainService {

	@Autowired
	private MypageMainMapper mypageMainMapper;

	public MypageMainServiceImp() {

	}

	@Override
	public int visitDailyProcess(String id) {
		mypageMainMapper.updateMypageVisitDaily(id);
		return mypageMainMapper.selectMypageVisitDaily(id);
	}

	@Override
	public int visitTotalProcess(String id) {
		mypageMainMapper.updateMypageVisitTotal(id);
		return mypageMainMapper.selectMypageVisitTotal(id);
	}

	@Override
	public String userPicProcess(String id) {
		return mypageMainMapper.selectUserPic(id);
	}

	@Override
	public String userMbtiProcess(String id) {
		return mypageMainMapper.selectUserMbti(id);
	}

	@Override
	public String userCaptionProcess(String id) {
		return mypageMainMapper.selectUserCaption(id);
	}

	@Override
	public List<String> followingListProcess(String id) {
		return mypageMainMapper.selectUserFollowing(id);
	}

	@Override
	public List<String> followerListProcess(String id) {
		return mypageMainMapper.selectUserFollower(id);
	}

}
