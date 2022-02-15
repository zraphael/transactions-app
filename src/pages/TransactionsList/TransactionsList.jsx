import React from 'react';
//  import getTransaction from '../../services/getTransactions'
import * as S from './styles';
import { Container, Header, Button } from '../../components/index';

function TransactionsList() {
  const transactionsHistory = 'oi'; // atualizar para um GET na API

  return (
    <Container>
      <Header title="Listagem de transações">
        <Button content="criar transação" redirect="/adicionar-transacao" />
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
                <S.TableLine>
                  <S.TableContent>MERCADO LIVRE PAGAMENTOS</S.TableContent>
                  <S.TableContent>20/10/2015</S.TableContent>
                  <S.TableContent>R$ 10,26</S.TableContent>
                  <S.TableContent>Boleto</S.TableContent>
                </S.TableLine>
                <S.TableLine>
                  <S.TableContent>MERCADO LIVRE PAGAMENTOS</S.TableContent>
                  <S.TableContent>20/10/2016</S.TableContent>
                  <S.TableContent>R$ 10,26</S.TableContent>
                  <S.TableContent>Boleto</S.TableContent>
                </S.TableLine>
                <S.TableLine>
                  <S.TableContent>MERCADO LIVRE PAGAMENTOS</S.TableContent>
                  <S.TableContent>20/10/2017</S.TableContent>
                  <S.TableContent>R$ 10,26</S.TableContent>
                  <S.TableContent>Boleto</S.TableContent>
                </S.TableLine>
                <S.TableLine>
                  <S.TableContent>MERCADO LIVRE PAGAMENTOS</S.TableContent>
                  <S.TableContent>20/10/2017</S.TableContent>
                  <S.TableContent>R$ 10,26</S.TableContent>
                  <S.TableContent>Boleto</S.TableContent>
                </S.TableLine>
                <S.TableLine>
                  <S.TableContent>MERCADO LIVRE PAGAMENTOS</S.TableContent>
                  <S.TableContent>20/10/2017</S.TableContent>
                  <S.TableContent>R$ 10,26</S.TableContent>
                  <S.TableContent>Boleto</S.TableContent>
                </S.TableLine>
                <S.TableLine>
                  <S.TableContent>MERCADO LIVRE PAGAMENTOS</S.TableContent>
                  <S.TableContent>20/10/2017</S.TableContent>
                  <S.TableContent>R$ 10,26</S.TableContent>
                  <S.TableContent>Boleto</S.TableContent>
                </S.TableLine>
                <S.TableLine>
                  <S.TableContent>MERCADO LIVRE PAGAMENTOS</S.TableContent>
                  <S.TableContent>20/10/2017</S.TableContent>
                  <S.TableContent>R$ 10,26</S.TableContent>
                  <S.TableContent>Boleto</S.TableContent>
                </S.TableLine>
                <S.TableLine>
                  <S.TableContent>MERCADO LIVRE PAGAMENTOS</S.TableContent>
                  <S.TableContent>20/10/2017</S.TableContent>
                  <S.TableContent>R$ 10,26</S.TableContent>
                  <S.TableContent>Boleto</S.TableContent>
                </S.TableLine>
              </tbody>
            </S.TransactionsTable>
          )
          : <S.NoTransaction>não existem transações</S.NoTransaction>}
      </S.TransactionsBox>
    </Container>
  );
}

export default TransactionsList;
