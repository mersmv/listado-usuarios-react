import Button from "../Button/Button"
import { UserAt, UserBox,  UserImage, UserInfoContainer, UserName, UserState } from "./styles"

const User = ({userId,profileImage, username, name, active,color}) => {
    return (
        <UserBox>
            <UserImage src={profileImage}></UserImage>
            <UserInfoContainer>
                <UserName>{name}</UserName>
                <UserAt>{username}</UserAt>
            </UserInfoContainer>
            <UserState active={active}>{active ? 'Activo' : 'Inactivo'}</UserState>
            <Button userId={userId}/>
        </UserBox>
    )
}

export default User