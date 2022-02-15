import React, { useState } from 'react';
import createTransaction from '../../services/createTransaction';
import {
  Container, Header, Button, LinkButton,
} from '../../components';
// import FormContainer from './NewTransaction.styles';
import * as S from './styles';

function NewTransaction() {
  const [establishmentName, setEstablishmentName] = useState('');
  const [transactionValue, setTransactionValue] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleEstablishmentChange = (event) => {
    setEstablishmentName(event.target.value);
  };

  const handleValueChange = (event) => {
    setTransactionValue(event.target.value);
  };

  const handleMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEstablishmentName('');
    setTransactionValue(0);
    setPaymentMethod('');

    createTransaction(establishmentName, transactionValue, paymentMethod);
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
