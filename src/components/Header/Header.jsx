
import { useState } from "react"
import { USERS } from "../../constants/users";
import AllUsers from "../AllUsers/AllUsers"
import { HeaderContainer, HeaderTitle, OptionsContainer } from "./styles"

const Header = () => {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(0)

    let usersFiltered = filterByActive(USERS, active)
    usersFiltered = filterByName(usersFiltered, value)
    
    return (
        <>
        <HeaderContainer>
            <HeaderTitle>Listado de Usuarios</HeaderTitle>
            <OptionsContainer>
            <form>
                <label for="text"/>
                <input type="text" name="text"/>
            </form>
                <div>
                    <p>Solo activos</p>
                    <input type="checkbox" checked={active} onChange={(ev)=> setActive(ev.target.checked) 
                    }/>
                </div>
                <select onChange={(e) => setValue(e.target.value)}>
                    <option value="0">Por Defecto</option>
                    <option value="1">Por Nombre</option>
                </select>
            </OptionsContainer>
        </HeaderContainer>
        <AllUsers users={usersFiltered}/>
        </>
    )
}

const filterByActive = (users, active) =>{
    if(active) {
       return users.filter(user => user.active)
    }
    return [...users]
}

const filterByName = (users, value) => {
    const newUsers = [...users]
   if(Number(value)===1){
    return newUsers.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
   })  
   }
   if(Number(value)===0){
        return newUsers
   }
}




export default Header