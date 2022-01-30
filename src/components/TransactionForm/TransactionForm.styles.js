import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    flex-direction: column;

    @media (max-width: 1034px) {
    }
`;

const Label = styled.label`
`;

const Input = styled.input`
`;

const ButtonsDiv = styled.div`
    padding-top: 20px;
    align-self: flex-start;
    align-content: flex-start;
`;

export {
  Form, Label, Input, ButtonsDiv,
};
