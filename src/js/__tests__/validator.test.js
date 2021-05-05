import validator from '../validator';

test.each([
  ['null', '', null],
  ['null', '000000000000', null],
  ['mir', '200000000000', '.icon__mir'],
  ['jcb vendor', '350000000000', '.icon__jcb'],
  ['diners club', '300000000000', '.icon__dinersclub'],
  ['diners club', '360000000000', '.icon__dinersclub'],
  ['diners club', '380000000000', '.icon__dinersclub'],
  ['diners club', '390000000000', '.icon__dinersclub'],
  ['american express', '340000000000', '.icon__americanexp'],
  ['american express', '370000000000', '.icon__americanexp'],
  ['visa vendor', '400000000000', '.icon__visa'],
  ['mastercard vendor', '510000000000', '.icon__mastercard'],
  ['discover vendor', '600000000000', '.icon__discover'],
])(('it should be %s'), (_, value, result) => {
  expect(validator(value)).toBe(result);
});
