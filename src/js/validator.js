export default function validator(value) {
  if (value[0] === '2') {
    return '.icon__mir';
  }

  if (value[0] === '3') {
    if (value[1] === '5') {
      return '.icon__jcb';
    }

    if (value[1] === '0' || value[1] === '6' || value[1] === '8' || value[1] === '9') {
      return '.icon__dinersclub';
    }

    if (value[1] === '4' || value[1] === '7') {
      return '.icon__americanexp';
    }
  }

  if (value[0] === '4') {
    return '.icon__visa';
  }

  if (value[0] === '5') {
    return '.icon__mastercard';
  }

  if (value[0] === '6') {
    return '.icon__discover';
  }

  return null;
}
