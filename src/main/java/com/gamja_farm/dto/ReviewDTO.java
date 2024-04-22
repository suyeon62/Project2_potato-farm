package com.gamja_farm.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewDTO {

	private int idx; // PK
	private int view_Cnt;
	private int like_Cnt;
	private String user_id; // 작성자
	private String movie_code; // 작성하는 영화
	private String review; // 리뷰 내용
	private Date regist_at;
	private String poster;
	private String name_kor;

	public ReviewDTO() {

	}

}
