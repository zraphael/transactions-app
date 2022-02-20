import styled from 'styled-components';

const colorsSet = {
  contained: {
    background: '#4F46E5',
    color: '#FFFFFF',
    border: '#FFFFFF',
    backgroundOnHover: '#3B35AC',
  },
  outlined: {
    background: '#FFFFFF',
    color: '#4F46E5',
    border: '#4F46E5',
    backgroundOnHover: '#E7E7E7',
  },
};

const ButtonLayout = styled.button`
    padding: 10px;
    width: 209px;
    height: 56px;
    background: ${(props) => colorsSet[props.variant].background};
    border-radius: 8px;
    font-weight: normal;
    font-size: 22px;
    color: ${(props) => colorsSet[props.variant].color};
    border: ${(props) => colorsSet[props.variant].border};
    transition: 0.7s;
    white-space: nowrap;
    cursor: pointer;


    :hover {
        transition: 0.7s;
        box-shadow: 0.50px 0.50px 0.50px 0.50px gray;
        background: ${(props) => colorsSet[props.variant].backgroundOnHover};
    }

    @media (max-width: 1034px) {
        width: 100%;
    }
`;

export default ButtonLayout;
