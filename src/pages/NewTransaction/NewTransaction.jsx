import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createTransaction from '../../services/createTransaction';
import {
  Container, Header, Button, LinkButton,
} from '../../components';
import dynamicMoneyFormatter from '../../utils/formatters/dynamicMoneyFormatter';
import * as S from './styles';

function NewTransaction() {
  const [establishmentName, setEstablishmentName] = useState('');
  const [transactionValue, setTransactionValue] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('boleto');

  const navigate = useNavigate();

  const handleEstablishmentChange = (event) => {
    setEstablishmentName(event.target.value);
  };

  const handleValueChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    const formatedValue = dynamicMoneyFormatter(inputValue);
    setTransactionValue(formatedValue);
  };

  const handleMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createTransaction(establishmentName, transactionValue, paymentMethod);
      console.log('Transação adicionada com sucesso!');
      navigate('/');
    } catch (e) {
      console.log(e);
      // Treat this error
    }
  };

  return (
    <Container>
      <Header title="Criação de transações" />
      <S.FormContainer>
        <S.TransactionForm>
          <S.InputsGroup>
            <S.IndividualInput>
              <S.InformationType>Nome do estabelecimento</S.InformationType>
              <S.InputSpace type="string" value={establishmentName} onChange={handleEstablishmentChange} />
            </S.IndividualInput>
            <S.IndividualInput>
              <S.InformationType>Valor</S.InformationType>
              <S.InputSpace type="number" value={transactionValue} onChange={handleValueChange} />
            </S.IndividualInput>
            <S.IndividualInput>
              <S.InformationType>Meio de pagamento</S.InformationType>
              <S.PaymentMethods value={paymentMethod} onChange={handleMethodChange}>
                <S.Method>boleto</S.Method>
                <S.Method>credit_card</S.Method>
              </S.PaymentMethods>
            </S.IndividualInput>
          </S.InputsGroup>
          <S.ButtonsGroup>
            <Button type="submit" value="Submit" content="criar transação" onClick={handleSubmit} variant="contained" />
            <LinkButton type="reset" content="cancelar" to="/" variant="outlined" />
          </S.ButtonsGroup>
        </S.TransactionForm>
      </S.FormContainer>
    </Container>
  );
}

export default NewTransaction;
