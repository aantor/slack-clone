import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { LoginInnerWrapper, LoginWrapper } from './Login.styles';

function Login() {
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginWrapper>
      <LoginInnerWrapper>
        <img
          src='https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png'
          alt=''
        />
        <h1>Sign in to the WebDevHero</h1>
        <p>webdevhero.slack.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerWrapper>
    </LoginWrapper>
  );
}

export default Login;
