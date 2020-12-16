/**
  test numbers
  Visa    4111 1111 1111 1111 
  MasterCard    5500 0000 0000 0004 
 */
export function creditCardType(cc) {
  
  const visa = new RegExp('^4[0-9]?');

  const mastercard = new RegExp('^5[1-5][0-9]?');
  const mastercard2 = new RegExp('^2[2-7][0-9]?');

  if (visa.test(cc)) {
    return 'VISA';
  }
  
  if (mastercard.test(cc) || mastercard2.test(cc)) {
    return 'MASTERCARD';
  }

  return undefined;
}
