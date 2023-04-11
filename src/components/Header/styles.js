import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 700px;
`
const HeaderTitle = styled.h1`
    margin-left: auto;
    margin-right: auto;
    font-size: 2rem;
`

const OptionsContainer = styled.div`
    width: 700px;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
`
export  {HeaderContainer, HeaderTitle, OptionsContainer}