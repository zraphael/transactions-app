const staticMoneyFormatter = (value) => {
  const formattedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  return formattedValue;
};

export default staticMoneyFormatter;
