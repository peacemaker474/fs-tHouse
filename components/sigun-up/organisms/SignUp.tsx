import Email from '../molecules/Email';
import SocialLogin from '../molecules/SocialLogin';
import Password from '../molecules/Password';
import PasswordCheck from '../molecules/PasswordCheck';
import Nickname from '../molecules/Nickname';
import TermsOfUse from '../molecules/TermsOfUse';

function SignUp() {
  return (
    <>
      <SocialLogin />
      <Email />
      <Password />
      <PasswordCheck />
      <Nickname />
      <TermsOfUse />
    </>
  );
}

export default SignUp;
