import React from 'react';
import { Input } from './CardNumber.styles';
const CardNumber = ({ value, setValue, focusNextField, setError }) => {
  const validate = val => {
    if (val === '' || val.length < 16) {
      setError('16 digit number is required');
    } else {
      setError(null);
    }
  };
  const MAX_LENGTH = 16;
  const onChange = e => {
    const re = /^[0-9\b]+$/;
    const val = e.target.value;
    if (val === '' || re.test(val)) {
      setValue(val);
      if (val.length === MAX_LENGTH) {
        focusNextField();
      }

    }
  };
  return (
    <Input value={value} onChange={onChange} onBlur={e => validate(e.target.value)} placeholder="0000 0000 0000 0000" maxLength="32"/>
  )
}
export default CardNumber;
