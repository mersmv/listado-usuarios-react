import { Route, Routes } from 'react-router-dom';
import Details from '../components/Details/Details';
import Header from '../components/Header/Header';


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/user/:userId' element={<Details/>}/>
        </Routes>
    )
}

export default Router

 