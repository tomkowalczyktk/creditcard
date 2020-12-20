import React from 'react';

import CreditCard from './components/CreditCard';

import { Wrapper, Inner } from './App.styles';

function App({ children }) {
  return (
    <Wrapper>
      <Inner>
        <CreditCard/>
      </Inner>
    </Wrapper>
  );
}

export default App;
