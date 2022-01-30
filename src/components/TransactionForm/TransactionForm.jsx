import React, { useState } from 'react';
import createTransaction from '../../services/createTransaction';
import Button from '../Button/Button';
import {
  Form, Label, Input, ButtonsDiv,
} from './TransactionForm.styles';

function TransactionForm() {
  const [establishmentName, setEstablishmentName] = useState('');
  const [transactionValue, setTransactionValue] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleEstablishmentChange = (event) => {
    setEstablishmentName(event.target.value);
  };

  const handleValueChange = (event) => {
    setEstablishmentName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEstablishmentName('');
    setTransactionValue(0);
    setPaymentMethod('');

    createTransaction(establishmentName, transactionValue, paymentMethod);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Nome do estabelecimento</Label>
      <Input type="string" value={establishmentName} onChange={handleEstablishmentChange} />
      <Label>Valor</Label>
      <Input type="number" value={transactionValue} onChange={handleValueChange} />
      <Label>Meio de pagamento</Label>
      <Input type="number" value={transactionValue} onChange={handleValueChange} />
      <ButtonsDiv>
        <Button name="SubmitButton" type="submit" value="Submit" content="criar transação" redirect="/" />
        <Button name="CancellButton" content="cancelar" redirect="/" />
      </ButtonsDiv>
    </Form>
  );
}

export default TransactionForm;
