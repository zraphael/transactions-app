/* eslint-disable linebreak-style */
const createTransaction = async (establishmentName, value, paymentMethod) => {
  const date = new Date().toLocaleDateString();
  const transactionInformation = {
    establishmentName, date, value, paymentMethod,
  };
  // async-await adicionado apenas para simulacao de uso de API
  // eslint-disable-next-line no-undef
  const currentStorage = JSON.parse(localStorage.getItem('transactions'));

  if (currentStorage) {
    const newTransaction = [...currentStorage, transactionInformation];
    localStorage.setItem('transactions', JSON.stringify(newTransaction));
  } else {
    localStorage.setItem('transactions', JSON.stringify(transactionInformation));
  }
};

export default createTransaction;
