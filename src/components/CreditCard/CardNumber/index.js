import React from 'react';

import { Input } from './CardNumber.styles';

const CardNumber = ({ value, setValue, focusNextField, setError }) => {

  const MAX_LENGTH = 16;

  const onChange = e => {

    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      setValue(e.target.value);
      if (e.target.value.length === MAX_LENGTH) {
        focusNextField();
      }
      
      if (e.target.value === ''||e.target.value.length < MAX_LENGTH) {
        setError('16 digit number is required');
      } else {
        setError(null);
      }
    }
  };

  return (
    <Input
      value={ value }
      onChange={ onChange }
      onBlur={ onChange }
      placeholder="0000 0000 0000 0000"
      maxLength="32"
    />
  )
}
export default CardNumber;
