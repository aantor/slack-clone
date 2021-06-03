import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import theme from './theme';
import Chat from './components/Chat/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/Login/Login';
import { auth } from './firebase';
import spinner from 'react-spinkit';

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src='https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png'
            alt=''
          />
          <spinner name='ball-spin-fade-loader' color='purple' fadeIn='none' />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <ThemeProvider theme={theme}>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route exact path='/'>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </ThemeProvider>
      )}
    </Router>
  );
}

export default App;

const AppBody = styled.main`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    object-fit: contain;
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;