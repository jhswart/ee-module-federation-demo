import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button/Button';
import Input from './Input/Input';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import GlobalStyle from './GlobalStyle';
import Owl from './Icons/Owl';
import Page from './Page/Page';

const SmallOwl = styled(Owl)`
  width: 2.5rem;
  height: 2.5rem;
`;

const StyledLink = styled(Link)`
  margin-bottom: 0.5rem;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Layout = styled.div`
  display: grid;

  grid-template-areas: 'nav content';
  grid-template-columns: 10rem;
  grid-gap: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  grid-area: nav;
`;

const Content = styled.div`
  grid-area: content;
`;

const ButtonWrapper = styled.div`
  & > ${Button} {
    margin-right: 1rem;
  }
`;

const App = () => {
  return (
    <Page>
      <GlobalStyle />
      <Router>
        <Layout>
          <Nav>
            <StyledLink to="/button">Button</StyledLink>
            <StyledLink to="/input">Input</StyledLink>
            <StyledLink to="/header">Header</StyledLink>
            <StyledLink to="/footer">Footer</StyledLink>
            <StyledLink to="/icons">Icons</StyledLink>
            <StyledLink to="/Page">Page</StyledLink>
          </Nav>
          <Content>
            <Switch>
              <Route path="/button">
                <ButtonWrapper>
                  <Button>Primary Button</Button>
                  <Button secondary>Secondary Button</Button>
                </ButtonWrapper>
              </Route>
              <Route path="/input">
                <Input />
              </Route>
              <Route path="/header">
                <Header />
              </Route>
              <Route path="/footer">
                <Footer />
              </Route>
              <Route path="/icons">
                <SmallOwl />
              </Route>
              <Route path="/page">
                <Page />
              </Route>
              <Route path="*">
                <Redirect to="/button" />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    </Page>
  );
};

export default App;
