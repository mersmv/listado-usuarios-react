
import { UserDetails } from "./styles"
import { useNavigate } from "react-router-dom"

const Button = ({userId}) => {
    const navigate = useNavigate()
    return (
        <UserDetails onClick={() => navigate('/user/'+userId)}>Show more</UserDetails>
    )
}

export default Button