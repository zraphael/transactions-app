import React from 'react'
//  import getTransaction from '../../services/getTransactions'
import Button from '../../components/Button/Button'
import {
  Container,
  Title,
  Header,
  NoTransaction,
  TransactionsListBox,
  TransactionsBox,
} from './TransactionsList.styles'

const TransactionsList = () => {
  const transactionsHistory = 'oi'

  return (
        <Container>
            <Header>
                <Title>Listagem de transações</Title>
                <Button content={'criar transação'} />
            </Header>
            <TransactionsBox>
                {transactionsHistory
                  ? <TransactionsListBox>
                        <li>Transacao 1</li>
                    </TransactionsListBox>

                  : <NoTransaction>não existem transações</NoTransaction>}
            </TransactionsBox>
        </Container>
  )
}

export default TransactionsList
