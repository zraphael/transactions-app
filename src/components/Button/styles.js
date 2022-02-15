import styled from 'styled-components';

const ButtonLayout = styled.button`
    width: 189px;
    height: 56px;
    background: #4F46E5;
    border-radius: 8px;
    font-weight: normal;
    font-size: 22px;
    color: #FFFFFF;
    border: none;
    transition: 0.7s;
    padding: 10px;
    white-space: nowrap;
    cursor: pointer;


    :hover {
        transition: 0.7s;
        box-shadow: 0.50px 0.50px 0.50px 0.50px gray;
        background: #3B35AC;
    }

    @media (max-width: 1034px) {
        width: 100%;
    }
`;

export default ButtonLayout;
