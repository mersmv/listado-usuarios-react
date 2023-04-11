import User from '../User/User';


const AllUsers = ({users}) => {
    return (
        <>
        {users.map(user => (<User key={user.id} {...user}/>))}
       </>
    )
}

export default AllUsers