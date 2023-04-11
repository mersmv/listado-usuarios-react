import { useNavigate, useParams } from "react-router-dom"
import { USERS } from "../../constants/users"


const Details = () => {
    const params = useParams()
    const navigate = useNavigate()
    //const {userId} = useParams()
    //params. se quitaria de abajo
    let selectedUser = USERS.find(user => user.userId === params.userId)
    console.log(params)
    return (
        <>
       <button onClick={() => navigate('/')}>Back To Users</button>
        <img src={selectedUser.profileImage}></img>
        <h1>Hi! My name is {selectedUser.name}</h1>
        <p>Im {selectedUser.age}</p>
        <p>My username is {selectedUser.username}</p>
        <p>You can contact me in {selectedUser.email} </p>
        <p>My Address is: </p>
        <p>{selectedUser.address.street}</p>
        <p>{selectedUser.address.city}</p>
        <p>{selectedUser.address.zipCode}</p>
        <p>You can call me at {selectedUser.phone}</p>
        </>
    )
}

export default Details