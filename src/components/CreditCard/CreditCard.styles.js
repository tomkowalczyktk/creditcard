import styled from 'styled-components'

const Wrapper = styled.div `
  padding: 1em;
`;

const Border = styled.div `
  background: #ddd;
  padding: 1em; 
`;

const Row = styled.div `
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 0.4em 0 0 0.4em;
  padding: 0.5em;
`;


export { Wrapper, Border, Row };
