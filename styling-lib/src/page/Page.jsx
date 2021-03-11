import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Owl from '../Icons/Owl';

const Content = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
`;

const HeaderOwl = styled(Owl)`
  grid-area: header;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const Main = styled.main`
  grid-area: main;
  padding: 2.5rem 1rem;
`;

const PageFooter = styled(Footer)`
  grid-area: footer;
`;

const Page = ({ children }) => (
  <Content>
    <Header>
      <HeaderOwl />
    </Header>
    <Main>{children}</Main>
    <PageFooter>The owls are not what they seem</PageFooter>
  </Content>
);

export default Page;
