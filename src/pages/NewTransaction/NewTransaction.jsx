import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createTransaction from '../../services/createTransaction';
import {
  Container, Header, Button, LinkButton,
} from '../../components';
import MoneyFormatter from '../../hooks/MoneyFormatter';
import * as S from './styles';

function NewTransaction() {
  const [establishmentName, setEstablishmentName] = useState('');
  const [transactionValue, setTransactionValue] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const navigate = useNavigate();

  const handleEstablishmentChange = (event) => {
    setEstablishmentName(event.target.value);
  };

  const handleValueChange = (event) => {
    const inputValue = event.target.value;
    const formatedValue = MoneyFormatter(inputValue);
    setTransactionValue(formatedValue);
  };

  const handleMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = async () => {
    // event.preventDefault();

    try {
      await createTransaction(establishmentName, transactionValue, paymentMethod);
      // Are the following lines necessary?
      // setEstablishmentName('');
      // setTransactionValue(0);
      // setPaymentMethod('');
      navigate('/');
    } catch (e) {
      console.log(e);
      // Treat this error
    }
  };

  return (
    <Container>
      <Header title="Criação de transações">
        <Button content="criar transação" redirect="/adicionar-transacao" />
      </Header>
      <S.FormContainer>
        <S.TransactionForm onSubmit={handleSubmit}>
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
              <S.Dropdown value={paymentMethod} onChange={handleMethodChange} />
            </S.IndividualInput>
          </S.InputsGroup>
          <S.ButtonsGroup>
            <Button type="submit" value="Submit" content="criar transação" />
            <LinkButton type="reset" content="cancelar" redirect="/" reverseStyle variant="outlined" />
          </S.ButtonsGroup>
        </S.TransactionForm>
      </S.FormContainer>
    </Container>
  );
}

export default NewTransaction;
