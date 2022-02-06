import React from 'react';
//  import getTransaction from '../../services/getTransactions'
import {
  NoTransaction,
  TransactionsBox,
  TransactionsTable,
  TableHeaderLine,
  TableHeader,
  TableLine,
  TableContent,
} from './TransactionsList.styles';
import Container from '../../components/Container/Container';

function TransactionsList() {
  const transactionsHistory = 'oi'; // atualizar para um GET na API

  return (
    <Container title="Listagem de transações" buttonText="criar transação" redirect="/newtransaction">
      <TransactionsBox>
        {transactionsHistory
          ? (
            <TransactionsTable>
              <TableHeaderLine>
                <TableHeader>Nome do estabelecimento</TableHeader>
                <TableHeader>Data da compra</TableHeader>
                <TableHeader>Valor</TableHeader>
                <TableHeader>Meio de pagamento</TableHeader>
              </TableHeaderLine>
              <TableLine>
                <TableContent>MERCADO LIVRE PAGAMENTOS</TableContent>
                <TableContent>20/10/2015</TableContent>
                <TableContent>R$ 10,26</TableContent>
                <TableContent>Boleto</TableContent>
              </TableLine>
              <TableLine>
                <TableContent>MERCADO LIVRE PAGAMENTOS</TableContent>
                <TableContent>20/10/2016</TableContent>
                <TableContent>R$ 10,26</TableContent>
                <TableContent>Boleto</TableContent>
              </TableLine>
              <TableLine>
                <TableContent>MERCADO LIVRE PAGAMENTOS</TableContent>
                <TableContent>20/10/2017</TableContent>
                <TableContent>R$ 10,26</TableContent>
                <TableContent>Boleto</TableContent>
              </TableLine>
            </TransactionsTable>
          )
          : <NoTransaction>não existem transações</NoTransaction>}
      </TransactionsBox>
    </Container>
  );
}

export default TransactionsList;
