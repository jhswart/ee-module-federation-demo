import * as React from 'react';
const GlobalStyle = React.lazy(() => import('styling/GlobalStyle'));
const Page = React.lazy(() => import('styling/Page'));
const List = React.lazy(() => import('app2/List'));

type ComponentProps = { greeting: string };

const Component = ({ greeting }: ComponentProps) => <div>{greeting}</div>;

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      <GlobalStyle />
      <Page>
        <Component greeting={'hello'} />
        <List />
      </Page>
    </React.Suspense>
  );
};

export default App;
