import React from 'react';
import Container from '../../components/Container/Container';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import FormWrap from './NewTransaction.styles';

function NewTransaction() {
  return (
    <div style={{ width: '100%' }}>
      <Container title="Criação de transações">
        <FormWrap>
          <TransactionForm />
        </FormWrap>
      </Container>
    </div>
  );
}

export default NewTransaction;
