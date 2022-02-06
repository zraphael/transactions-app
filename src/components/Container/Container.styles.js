import styled from 'styled-components';

const ContainerWrap = styled.div`
    align-content: center;
    height: 100vh;
    padding-top: 56px;

    @media (min-width: 1034px) {
        widht: 40%;
        padding: 79px 61px 0px 61px;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 44px;

    @media (min-width: 1034px) {
        flex-direction: row;
    }
`;

const Title = styled.div`
    display: flex;
    width: 100%;
    height: 44px;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    white-space: nowrap;
    padding-bottom: 15px;

    @media (min-width: 1034px) {
        justify-content: flex-start;
        text-align: left;
        font-size: 48px;
        width: 100%;
    }
`;

const ChildrenComponent = styled.div`
    display: flex;
    flex-direction: row;
    height: 433px;
    margin-top: 44px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1034px) {
        margin-top: 70px;
    }
`;

export {
  ContainerWrap, Title, Header, ChildrenComponent,
};
