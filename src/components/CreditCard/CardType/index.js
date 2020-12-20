import React from 'react';

import { creditCardType } from './tools';
import { Icon, Wrapper } from './CardType.styles';

import visaIcon from 'payment-icons/min/flat/visa.svg';
import mastercardIcon from 'payment-icons/min/flat/mastercard.svg';
import defaultIcon from 'payment-icons/min/flat/default.svg';

const CardType = ({ number }) => {

  const type = creditCardType((number + '').replace(' ', ''));
  
  let Image = <Icon src={ defaultIcon } />;
  
  switch (type) {
    case 'VISA':
      Image = <Icon src={visaIcon}/>;
      break;
    case 'MASTERCARD':
      Image = <Icon src={mastercardIcon}/>;
      break;
    default:
      Image = < Icon src={ defaultIcon } />;
  }
  return (
    <Wrapper>{Image}</Wrapper>
  );
}


export default CardType;
