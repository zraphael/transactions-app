import axiosClient from './axios';

const getTransactions = async () => {
  try {
    const transactions = await axiosClient.get('/transactions');

    return transactions.data.data;
  } catch (e) {
    // console.log(e);
    return 'API Error';
  }
};

export default getTransactions;
