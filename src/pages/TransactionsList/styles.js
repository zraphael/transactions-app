import styled from 'styled-components';

const TransactionsBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    width: 100%;
    heigth: 100%;
    min-height: 433px;
    margin-bottom: 100px;
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
    padding: 10px;
    padding-top: 2px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    @media (min-width: 708px) {

        flex-direction: column;
        padding: 34px;
    }
`;

const TableTitles = styled.tr`
    width: 100%;
    display: flex;
    margin-top: 20px;

    @media (max-width: 708px) {

        margin-top: 0px;
        padding-bottom: 30px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 708px) {

        display: none;
        visibility: hidden;
    }
`;

const ColumnTitle = styled.th`
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
    margin-top: 20px;

    @media (max-width: 708px) {

        margin-top: 0px;
        padding-top: 20px;
        padding-bottom: 20px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 708px) {

        td {
            border-top: 1px solid #E9E9E9;
        }
    }

    @media (max-width: 708px) {

        &:nth-child(odd) {
            background-color: #cccccc;
        }
    }
`;

const TableContent = styled.td`
    padding-top: 20px;
    width: 25%;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;

    @media (max-width: 708px) {
        padding-top: 10px;
        text-align: center;
        flex-basis: 40%;
    }
`;

export {
  NoTransaction,
  TransactionsBox,
  TransactionsTable,
  TableTitles,
  ColumnTitle,
  TableLine,
  TableContent,
};
