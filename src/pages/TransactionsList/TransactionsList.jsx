import React from 'react';
import { v4 as uuid } from 'uuid';
import getTransactions from '../../services/getTransactions';
import * as S from './styles';
import { Container, Header, LinkButton } from '../../components/index';

function TransactionsList() {
  const transactionsHistory = getTransactions(); // atualizar para um GET na API
  console.log(transactionsHistory);

  return (
    <Container>
      <Header title="Listagem de transações">
        <LinkButton content="criar transação" to="/adicionar-transacao" variant="contained" />
      </Header>
      <S.TransactionsBox>
        {transactionsHistory
          ? (
            <S.TransactionsTable>
              <thead>
                <S.TableTitles>
                  <S.ColumnTitle>Nome do estabelecimento</S.ColumnTitle>
                  <S.ColumnTitle>Data da compra</S.ColumnTitle>
                  <S.ColumnTitle>Valor</S.ColumnTitle>
                  <S.ColumnTitle>Meio de pagamento</S.ColumnTitle>
                </S.TableTitles>
              </thead>
              <tbody>
                {transactionsHistory.map((item) => (
                  <S.TableLine>
                    <S.TableContent key={uuid()}>{item.establishmentName}</S.TableContent>
                    <S.TableContent key={uuid()}>{item.date}</S.TableContent>
                    <S.TableContent key={uuid()}>{item.value}</S.TableContent>
                    <S.TableContent key={uuid()}>{item.paymentMethod}</S.TableContent>
                  </S.TableLine>
                ))}
              </tbody>
            </S.TransactionsTable>
          )
          : <S.NoTransaction>não existem transações</S.NoTransaction>}
      </S.TransactionsBox>
    </Container>
  );
}

export default TransactionsList;
