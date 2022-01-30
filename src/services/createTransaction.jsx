/* eslint-disable linebreak-style */
const createTransaction = async (establishmentName, value, paymentMethod) => {
  const transactionInformation = { establishmentName, value, paymentMethod };
  // async-await adicionado apenas para simulacao de uso de API
  await localStorage.setItem(transactionInformation);
};

export default createTransaction;
