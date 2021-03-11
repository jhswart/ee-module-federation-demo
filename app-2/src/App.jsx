import React, { Suspense, lazy } from 'react';
import List from './List/List';
const GlobalStyle = React.lazy(() => import('styling/GlobalStyle'));

const App = () => (
  <Suspense fallback="Loading...">
    <GlobalStyle />
    <List />
  </Suspense>
);

export default App;
