import React from 'react';
// import logo from './logo.svg';
import { Wrapper, Inner } from './App.styles';

function App({ children }) {
  return (
    <Wrapper>
      <Inner>
        {children}
      </Inner>
    </Wrapper>
  );
}

export default App;
