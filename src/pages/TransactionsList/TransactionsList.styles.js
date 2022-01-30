import styled from 'styled-components';

const TransactionsBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    width: 100%;
    heigth: 100%;
    height: 433px;

    @media (max-width: 1034px) {
        margin-top: 70px;
    }
`;

const TransactionsListBox = styled.ul`

`;

const NoTransaction = styled.div`

    width: 259px;
    height: 22px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
`;

export {
  NoTransaction, TransactionsListBox, TransactionsBox,
};
