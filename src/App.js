
import './App.css';

import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import CourtRegistration from './pages/CourtRegistration';
import MyCourtPage from './pages/MyCourtPage';
import SingleCourtViewPage from './pages/SingleCourtViewPage';
import { Authorization } from './authorization/authorizaton';

function App() {
  return (
    <BrowserRouter>
    <Routes>

     <Route path='/' element={<LoginPage />}/>
     <Route element={<Authorization/>} >  
     <Route path='/home' element={<Home />}/>
     
     </Route>
     
     
     <Route path='/courtRegistration' element={<CourtRegistration/>}/>
     <Route path='/myCourts' element={<MyCourtPage/>}/>
     <Route path='/SingleCourtView/:id' element={ <SingleCourtViewPage />}/>

    </Routes>
    
    
    
    </BrowserRouter>
   
  );
}

export default App;
