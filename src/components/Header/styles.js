import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 44px;

    @media (min-width: 1034px) {
        flex-direction: row;
    }
`;

const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    white-space: nowrap;

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
    margin-top: 44px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1034px) {
        margin-top: 70px;
    }
`;

export {
  Title, Header, ChildrenComponent,
};
