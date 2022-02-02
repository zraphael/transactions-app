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

const NoTransaction = styled.div`

    width: 259px;
    height: 22px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
`;

const TransactionsTable = styled.table`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 34px;

    @media (max-width: 736px) {
        padding: 10px;
    }
`;

const TableHeader = styled.th`
    width: 25%;
    text-align: left;
    padding-bottom: 8px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
`;

const TableLine = styled.tr`
    width: 100%;
    display: flex;
    padding-top: 20px;
`;

const TableContent = styled.td`
    border-top: 1px solid #E9E9E9;
    padding-top: 20px;
    width: 25%;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;

export {
  NoTransaction, TransactionsBox, TransactionsTable, TableHeader, TableLine, TableContent,
};
