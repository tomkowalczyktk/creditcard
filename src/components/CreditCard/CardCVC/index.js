import React from 'react';
import { Input } from './CreditCVC.styles';

const CreditCVC = React.forwardRef(({ value, setValue, setError }, ref) => {

  const validate = value => {
    if ((value||'').length === 0) {
      setError('CVC is required');
    } else {
      setError(null);
    }
  };

  const onChange = e => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setValue(e.target.value);
      validate(e.target.value);
    }
  };

  return (
    <Input
      value={ value }
      onChange={ onChange }
      onBlur={ onChange }
      placeholder="CVC"
      maxLength="3"
      ref={ ref }
    />
  )
});
export default CreditCVC;
