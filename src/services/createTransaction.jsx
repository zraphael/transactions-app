import axiosClient from './axios';

const createTransaction = async (establishmentName, value, paymentMethod) => {
  const parsedValue = parseInt(value, 10);
  console.log(parsedValue);

  try {
    const postTransaction = await axiosClient.post('/transactions', {
      data: {
        establishment_name: establishmentName,
        amount: parsedValue,
        payment_method: paymentMethod,
      },
    });

    console.log(postTransaction);
    return postTransaction.status;
  } catch (e) {
    return false;
  }
};

export default createTransaction;
