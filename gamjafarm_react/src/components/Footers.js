import React from "react";
import styled from "styled-components";
import grayLogo from "../images/grayLogo.png";
import kakaotalkIcon from "../images/kakaotalk.png";
import instagramIcon from "../images/instagram.png";
import facebookIcon from "../images/facebook.png";
import twitterIcon from "../images/twitter.png";

const FootersContainer = styled.div``;

const UpperFooter = styled.div`
  background-color: #101113;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const LowerFooter = styled.div`
  background-color: #1c1d1f;
  height: 180px;
  justify-content: space-between;
  align-items: center;
`;

const FooterContatiner = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: flex-end;
`;

const Slogan = styled.div`
  color: #848485;
  font-size: 12px;
  text-align: left;

  margin: 0 20px;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  width: 80px;
  height: 20px;
  margin-right: 10px;
`;

const Copyright = styled.div`
  color: #848485;
  font-size: 12px;
  text-align: left;
`;

const SocialFlatform = styled.div`
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
  align-items: flex-end;
  margin-right: 20px;
`;

const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

const Footers = () => {
  return (
    <FootersContainer>
      <UpperFooter></UpperFooter>

      <LowerFooter>
        <Slogan>나만을 위한 영화 추천 플랫폼, 감자밭</Slogan>
        <FooterContatiner>
          <Logo className="grayLogo" src={grayLogo} alt="흑백 로고"></Logo>
          <Copyright>&copy; 2024 감자밭. All Rights Reserved.</Copyright>
        </FooterContatiner>
        <SocialFlatform>
          <SocialIcon
            className="kakaotalk"
            src={kakaotalkIcon}
            alt="카카오톡"
          />
          <SocialIcon
            className="instagram"
            src={instagramIcon}
            alt="인스타그램"
          />
          <SocialIcon className="facebook" src={facebookIcon} alt="페이스북" />
          <SocialIcon className="twitter" src={twitterIcon} alt="트위터" />
        </SocialFlatform>
      </LowerFooter>
    </FootersContainer>
  );
};

export default Footers;
