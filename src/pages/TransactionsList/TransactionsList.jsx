import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import staticMoneyFormatter from '../../utils/formatters/staticMoneyFormatter';
import getTransactions from '../../services/getTransactions';
import * as S from './styles';
import { Container, Header, LinkButton } from '../../components/index';

dayjs.extend(customParseFormat);

function TransactionsList() {
  const [transactionsList, setTransactions] = useState(null);
  // const [onGetError, setError] = useState(false);

  useEffect(() => {
    getTransactions()
      .then((items) => {
        setTransactions(items);
        console.log(transactionsList);
      });
  }, []);

  return (
    <Container>
      <Header title="Listagem de transações">
        <LinkButton content="criar transação" to="/adicionar-transacao" variant="contained" />
      </Header>
      <S.TransactionsBox>
        {transactionsList
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
                {
                transactionsList !== 'API Error'
                  ? transactionsList.map((item) => (
                    <S.TableLine key={item.id}>
                      <S.TableContent>{item.attributes.establishment_name}</S.TableContent>
                      <S.TableContent>{dayjs(item.attributes.createdAt).format('DD/MM/YYYY')}</S.TableContent>
                      <S.TableContent>
                        {staticMoneyFormatter(item.attributes.amount)}
                      </S.TableContent>
                      <S.TableContent>{item.attributes.payment_method}</S.TableContent>
                    </S.TableLine>
                  ))
                  : (
                    <S.NoTransaction>
                      Erro ao tentar carregar transações, por favor atualize a página
                    </S.NoTransaction>
                  )
                }
              </tbody>
            </S.TransactionsTable>
          )
          : <S.NoTransaction>Não existem transações</S.NoTransaction>}
      </S.TransactionsBox>
    </Container>
  );
}

export default TransactionsList;
