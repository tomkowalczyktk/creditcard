import React from 'react';
import { Input } from './CreditCVC.styles';
const CreditCVC = React.forwardRef(({ value, setValue, setError }, ref) => {
  const validate = val => {
    if ((val || '').length !== 3) {
      setError('CVC is required (3 digits)');
    } else {
      setError(null);
    }
  };
  const onChange = e => {
    const re = /^[0-9\b]+$/;
    const val = e.target.value;
    if (val === '' || re.test(val)) {
      setValue(val);
    }
  };

  return (
    <Input value={value} onChange={onChange}  onBlur={e => validate(e.target.value)} placeholder="CVC" maxLength="3" ref={ref}/>
  )
});
export default CreditCVC;
