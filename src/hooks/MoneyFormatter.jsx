const MoneyFormatter = (value) => {
  const ValueMaskReset = (maskedValue) => {
    const removedRightZeros = maskedValue.replace(/[.,]0{2}/, '');
    const removedSymbols = removedRightZeros.replace(/\D/g, '');

    return removedSymbols;
  };

  const unmaskedValue = ValueMaskReset(value);

  const formattedValue = Number(unmaskedValue / 100)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+,)/g, '$&.'); // Mask is broken yet

  return formattedValue;
};

export default MoneyFormatter;
