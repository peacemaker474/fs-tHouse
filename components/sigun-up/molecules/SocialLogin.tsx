import styled from '@emotion/styled';
import SubTitle from '../atoms/SubTitle';
import SocialLogo from '../atoms/SocialLogo';
import FacebookLogo from '../../../public/images/social_login_logo/facebook_logo.png';
import KakaoLogo from '../../../public/images/social_login_logo/kakaotalk_logo.png';
import NaverLogo from '../../../public/images/social_login_logo/naver_logo.png';

function SocialLogin() {
  return (
    <SocialLoginWrapper>
      <SubTitle>SNS계정으로 간편하게 회원가입</SubTitle>
      <SocialLogoWrapper>
        <SocialLogo link="facebookRedirect" imageURL={FacebookLogo} alt="페이스북으로 로그인" />
        <SocialLogo link="kakaotalkRedirect" imageURL={KakaoLogo} alt="카카오톡으로 로그인" />
        <SocialLogo link="naverRedirect" imageURL={NaverLogo} alt="네이버로 로그인" />
      </SocialLogoWrapper>
    </SocialLoginWrapper>
  );
}

export default SocialLogin;

const SocialLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(237, 237, 237);
`;

const SocialLogoWrapper = styled.div`
  display: flex;
`;
