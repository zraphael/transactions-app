import React, { useState } from 'react';
import createTransaction from '../../services/createTransaction';
import Button from '../Button/Button';
import { Form, Label, Input } from './TransactionForm.styles';

function TransactionForm() {
  const [establishmentName, setEstablishmentName] = useState('');
  const [transactionValue, setTransactionValue] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleEstablishmentChanger = (event) => {
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
      <Label />
      <Input type="string" value={establishmentName} onChange={handleEstablishmentChanger} />
      <Button name="SubmitButton" content="criar transação" />
      <Button name="CancellButton" content="cancelar" />
    </Form>
  );
}

export default TransactionForm;
