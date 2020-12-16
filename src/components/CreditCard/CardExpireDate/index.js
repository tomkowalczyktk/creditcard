import React, { useState, useRef } from 'react';
import { Input, Separator, Wrapper } from './CardExpireDate.styles';
const CardExpireDate = React.forwardRef(({ value, setValue, focusNextField, setError }, ref) => {
  const separator = '-';
  const validate = (m, y) => {
    if (m === '' || y === '') {
      setError('Expire date is required');
    } else {
      const currentYear = (new Date()).toLocaleDateString('en', { year: '2-digit' });
      const currentMonth = (new Date()).toLocaleDateString('en', { month: '2-digit' });
      const currentDate = [currentYear, currentMonth].join(separator);
      const date = [y, m].join(separator);
      if (date <= currentDate) {
        setError('Card Expired');
      } else {
        setError(null);
      }
    }
  }
  
  const [month, year] = (value || '').split(separator);

  const setMonth = (mValue) => {
    const val = [mValue, year].join(separator);
    setValue(val);
  }
  const setYear = (yValue) => {
    const val = [month, yValue].join(separator);
    setValue(val);
  }

  const yearRef = useRef();

  const onMonthChange = e => {
    const re = /^[0-1]{1}[0-9]?$/;
    const val = e.target.value;
    if (val === '' || (re.test(val) && parseInt(val, 10) < 13)) {
      setMonth(val);
      if (val.length === 2) {
        yearRef.current.focus();
      }
    }
  };

  const onYearChange = e => {
    const re = /^[0-9\b]+$/;
    const val = e.target.value;
    if (val === '' || re.test(val)) {
      setYear(val);
      if (val.length === 2) {
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
        onBlur={e => validate(month, e.target.value)}
        ref={yearRef} 
      />
    </Wrapper>
  )
});

export default CardExpireDate;
