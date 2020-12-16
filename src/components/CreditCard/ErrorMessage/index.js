import React from 'react';
import { Message } from './ErrorMessage.styles';

const ErrorMessage = ({ errors }) => {
  
  return (
    <Message>
      {Object.values(errors).map((error, i)=><p key={`error-${i}`}>{error}</p>)}
    </Message>
  )  
}
export default ErrorMessage;
