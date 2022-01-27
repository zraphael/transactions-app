import styled from 'styled-components'

const ButtonDiv = styled.button`
    width: 100%;
    background: #4F46E5;
    border-radius: 8px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
    border: none;
    transition: 0.7s;
    padding: 10px;

    :hover {
        transition: 0.7s;
        box-shadow: 0.50px 0.50px 0.50px 0.50px gray;
        background: #3B35AC;
    }

    @media (min-width: 1034px) {
        width: 20%;
        height: 56px;
    }
`

export default ButtonDiv
