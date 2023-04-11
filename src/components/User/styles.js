import styled from "styled-components";

const UserBox = styled.div`
    width: 600px;
    height: 80px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px;
    display: flex;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
`

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;

`

const UserInfoContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

const UserAt = styled.h3`
    font-size: 0.8rem;
`

const UserName = styled.h2`
    font-size: 1.1rem;
`
const UserState = styled.h3`
    color: ${({active})=> active ? "green" : "red"};

`



export {UserBox, UserImage, UserAt,  UserName, UserState, UserInfoContainer}