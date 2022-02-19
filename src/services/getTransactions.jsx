const getTransactions = () => {
  const newStorage = JSON.parse(localStorage.getItem('transactions'));
  return newStorage;
};

export default getTransactions;
