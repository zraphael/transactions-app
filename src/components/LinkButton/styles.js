import styled from 'styled-components';

const ButtonLayout = styled.button`
    width: 189px;
    height: 56px;
    background: ${(props) => (props.variant ? '#FFFFFF' : '#4F46E5')};
    border-radius: 8px;
    font-weight: normal;
    font-size: 22px;
    color: ${(props) => (props.variant ? '#4F46E5' : '#FFFFFF')};
    border: ${(props) => (props.variant ? '1px solid #4F46E5' : '1px solid #FFFFFF')};
    transition: 0.7s;
    padding: 10px;
    white-space: nowrap;

    :hover {
        transition: 0.7s;
        box-shadow: 0.50px 0.50px 0.50px 0.50px gray;
        background: ${(props) => (props.variant ? '#E7E7E7' : '#3B35AC')};
    }

    @media (max-width: 1034px) {
        width: 100%;
    }
`;

export default ButtonLayout;
