import React from 'react';
//  import getTransaction from '../../services/getTransactions'
import {
  NoTransaction,
  TransactionsListBox,
  TransactionsBox,
} from './TransactionsList.styles';
import Container from '../../components/Container/Container';

function TransactionsList() {
  const transactionsHistory = 'oi'; // atualizar para um GET na API

  return (
    <Container title="Listagem de transações" buttonText="criar transação" redirect="/newtransaction">
      <TransactionsBox>
        {transactionsHistory
          ? (
            <TransactionsListBox>
              <li>Transacao 1</li>
            </TransactionsListBox>
          )
          : <NoTransaction>não existem transações</NoTransaction>}
      </TransactionsBox>
    </Container>
  );
}

export default TransactionsList;
