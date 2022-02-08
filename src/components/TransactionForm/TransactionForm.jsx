import React, { useState } from 'react';
import createTransaction from '../../services/createTransaction';
import Button from '../Button/Button';
import {
  Form, Label, Input, Select, InputsBox, EachInput, ButtonsDiv,
} from './TransactionForm.styles';

function TransactionForm() {
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
    <Form onSubmit={handleSubmit}>
      <InputsBox>
        <EachInput>
          <Label>Nome do estabelecimento</Label>
          <Input type="string" value={establishmentName} onChange={handleEstablishmentChange} />
        </EachInput>
        <EachInput>
          <Label>Valor</Label>
          <Input type="number" value={transactionValue} onChange={handleValueChange} />
        </EachInput>
        <EachInput>
          <Label>Meio de pagamento</Label>
          <Select value={paymentMethod} onChange={handleMethodChange} />
        </EachInput>
      </InputsBox>
      <ButtonsDiv>
        <Button name="SubmitButton" type="submit" value="Submit" content="criar transação" redirect="/" />
        <Button name="CancellButton" content="cancelar" redirect="/" reverseStyle />
      </ButtonsDiv>
    </Form>
  );
}

export default TransactionForm;
