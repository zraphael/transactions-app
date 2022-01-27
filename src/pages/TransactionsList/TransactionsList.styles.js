import styled from 'styled-components'

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

export {
  Container, Title, Header, NoTransaction, TransactionsListBox, TransactionsBox,
}
