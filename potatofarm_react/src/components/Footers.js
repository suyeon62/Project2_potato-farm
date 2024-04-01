import React from 'react';
import styled from 'styled-components';
import imageLogo from '../images/logo.png'
import kakaotalkIcon from '../images/kakaotalk.png';
import instagramIcon from '../images/instagram.png';
import facebookIcon from '../images/facebook.png';
import twitterIcon from '../images/twitter.png';

const FootersContainer = styled.div`
  background-color: #8d808044;
`;

const UpperFooter = styled.div`
  height: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const ImageLogo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 5px;
`;

const TextLogo = styled.div`
  background-color: none;
  border-style: none;
  color: #342222;
  font-weight: bold;
  text-align: center;
  font-size: 22px;
`;

const Slogan = styled.div`
  font-size: 12px;
  text-align: right;
  margin-right: 20px;
  margin-bottom: 10px;
`;

const LowerFooter = styled.div`
  background-color: #1d1010;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.div`
  color: #fff;
  padding: 10px;
  font-size: 12px;
  text-align: left;
`;

const SocialFlatform = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
    <UpperFooter>
      <Logo>
        <ImageLogo src={imageLogo} alt="로고" />
        <TextLogo>감자밭</TextLogo>
      </Logo>
    </UpperFooter>
    <Slogan>나만을 위한 영화 추천 플랫폼, 감자밭</Slogan>
    <LowerFooter>
      <Copyright>&copy; 2024 감자밭. All Rights Reserved.</Copyright>
      <SocialFlatform>
        <SocialIcon className="kakaotalk" src={kakaotalkIcon} alt="카카오톡" />
        <SocialIcon className="instagram" src={instagramIcon} alt="인스타그램" />
        <SocialIcon className="facebook" src={facebookIcon} alt="페이스북" />
        <SocialIcon className="twitter" src={twitterIcon} alt="트위터" />
      </SocialFlatform>
    </LowerFooter>
  </FootersContainer>
  );
};

export default Footers;