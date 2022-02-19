import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    @media (max-width: 1034px) {
    }
`;

const TransactionForm = styled.form`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    flex-direction: column;

    @media (max-width: 1034px) {
    }
`;

const InformationType = styled.label`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
`;

const InputSpace = styled.input`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    width: 313px;
    height: 45px;
    padding-left: 9px;
    margin-top: 15px;
    margin-bottom: 14px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    outline: none !important;
    border: none;
    margin-top: 5px;
`;

const PaymentMethods = styled.select`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    width: 313px;
    height: 45px;
    padding-left: 9px;
    margin-top: 15px;
    margin-bottom: 14px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    outline: none !important;
    border: none;
    margin-top: 5px;
`;

const Method = styled.option`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
`;

const InputsGroup = styled.div`
    display: flex;
    flex-direction: row;
`;

const IndividualInput = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 16px;
`;

const ButtonsGroup = styled.div`
    display: flex;
    padding-top: 93px;
    flex-direction: row;

    button {
      margin-right: 13px;
    }
`;

export {
  FormContainer,
  TransactionForm,
  InformationType,
  InputSpace,
  PaymentMethods,
  Method,
  InputsGroup,
  IndividualInput,
  ButtonsGroup,
};
