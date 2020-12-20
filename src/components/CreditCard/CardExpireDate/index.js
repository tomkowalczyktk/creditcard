import React, { useRef } from 'react';
import { Input, Separator, Wrapper } from './CardExpireDate.styles';

const CardExpireDate = React.forwardRef(({ value, setValue, focusNextField, setError }, ref) => {

  const [month, year] = (value || '').split('-');

  const setMonth = (mValue) => {
    const val = [mValue, year].join('-');
    setValue(val);
  }

  const setYear = (yValue) => {
    const val = [month, yValue].join('-');
    setValue(val);
  }

  const yearRef = useRef();

  const onMonthChange = e => {

    const re = /^[0-9\b]+$/;
    const val = e.target.value;

    if (val === '' || re.test(val)) {
      setMonth(val);
      if (val.length === 2) {
        yearRef.current.focus();
        
        if (val.length < 2 || val > 12) {
          setError('Enter month number between 01 and 12')
        } else {
          setError(null);
        }
      }
    }
  };

  const onYearChange = e => {

    const re = /^[0-9\b]+$/;
    const val = e.target.value;
    
    const currentYear = (new Date()).toLocaleDateString('en', { year: '2-digit' });
    const currentMonth = (new Date()).toLocaleDateString('en', { month: '2-digit' });

    if (val === '' || re.test(val)) {
      setYear(val);
      if (val.length === 2) {
                
        if (val < currentYear ) {
          setError('Enter valid year')
        } else {
          setError(null);
        }
        
        if (val === currentYear && month === currentMonth) {
          setError('Card Expired');
        } else { setError(null) };

        if (val === currentYear && month < currentMonth) {
          setError('Card expired');
        } else { setError(null) };
        
        focusNextField();
      }     
    }
  };
  

  return (
    <Wrapper>
      <Input
        value={month}
        onChange={onMonthChange}
        placeholder="MM"
        maxLength="2"
        ref={ref}
      />
      <Separator>/</Separator>
      <Input
        value={year}
        onChange={onYearChange}
        placeholder="YY"
        maxLength="2"
        onBlur={onYearChange}
        ref={yearRef} 
      />
    </Wrapper>
  )
});

export default CardExpireDate;
