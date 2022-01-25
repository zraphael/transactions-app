import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TransactionsList = () => {

    const [transactionsHistory, setTransactions] = useState(() => {

        const storedHistory = localStorage.getItem('transactions');
        const transactionsState = JSON.parse(storedHistory);
        return transactionsState;
    })

    return(
        
        <Container>
            <Header>
                <Title>Listagem de transações</Title>
                <CreateTransactionButton>criar transação</CreateTransactionButton>
            </Header>
            <TransactionsBox>
            {transactionsHistory 
                ?   
                    <TransactionsListBox>
                        {transactionsHistory.map((individualTransaction) => {
                            return (
                                <li>{individualTransaction}</li>)
                        })}
                    </TransactionsListBox>

                : <NoTransaction>não existem transações</NoTransaction>}
            </TransactionsBox>
        </Container>
    );
};

const Container = styled.div`
    align-content: center;
    width: 80%;
    height: 100vh;

    @media only screen and (min-width: 1034px) {
        widht: 40%;
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    padding-top 79px;

    @media only screen and (min-width: 1034px) {
        flex-direction: row;
    }
`

const Title = styled.div`
    height: 44px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 56,25px;
    white-space: nowrap;
    padding-bottom: 15px;

    @media only screen and (min-width: 1034px) {
        widht: 100%;
        font-size: 48px;
    }
`

const CreateTransactionButton = styled.button`
    width: 100%;
    background: #4F46E5;
    border-radius: 8px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
    border: none;
    transition: 0.7s;
    padding: 10px;

    :hover {
        transition: 0.7s;
        box-shadow: 0.50px 0.50px 0.50px 0.50px gray;
        background: #3B35AC;
    }

    @media (min-width: 1034px) {
        width: 20%;
        height: 56px;
    }
`

const TransactionsBox = styled.div`
    display: flex;
    height: 433px;
    margin-top: 44px;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;

    @media (max-width: 1034px) {
        margin-top: 70px;
    }
`

const TransactionsListBox = styled.ul`

`

const NoTransaction = styled.div`

    width: 259px;
    height: 22px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
`

export default TransactionsList;
