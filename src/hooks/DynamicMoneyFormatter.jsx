const DynamicMoneyFormatter = (value) => {
  const ValueMaskReset = (maskedValue) => {
    const removedSymbols = maskedValue.replace(/\D/g, '');

    return removedSymbols;
  };

  const unmaskedValue = ValueMaskReset(value);

  const formattedValue = Number(unmaskedValue / 100)
    .toFixed(2);

  return formattedValue;
};

export default DynamicMoneyFormatter;
