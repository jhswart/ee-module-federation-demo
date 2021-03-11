import * as React from 'react';
const GlobalStyle = React.lazy(() => import('styling/GlobalStyle'));
const Page = React.lazy(() => import('styling/Page'));
const List = React.lazy(() => import('app2/List'));

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      <GlobalStyle />
      <Page>
        <List />
      </Page>
    </React.Suspense>
  );
};

export default App;
