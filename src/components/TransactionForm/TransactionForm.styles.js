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
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
`;

const Input = styled.input`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    width: 313px;
    height: 45px;
    padding-left: 9px;
    margin-top: 15px;
    margin-bottom: 14px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    outline: none !important;
    border: none;
    margin-top: 5px;
`;

const Select = styled.select`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;

    width: 313px;
    height: 45px;
    padding-left: 9px;
    margin-top: 15px;
    margin-bottom: 14px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    outline: none !important;
    border: none;
    margin-top: 5px;
`;

const InputsBox = styled.div`
    display: flex;
    flex-direction: row;
`;

const EachInput = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 16px;
`;

const ButtonsDiv = styled.div`
    padding-top: 93px;
    align-self: flex-start;
    align-content: flex-start;

    button {
      margin-right: 13px;
    }
`;

export {
  Form, Label, Input, Select, InputsBox, EachInput, ButtonsDiv,
};
