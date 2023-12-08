
import './App.css';

import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import CourtRegistration from './pages/CourtRegistration';
import MyCourtPage from './pages/MyCourtPage';
import SingleCourtViewPage from './pages/SingleCourtViewPage';
import { Authorization,LoginPageAuth ,VenderAuth} from './authorization/Authorizaton';
import SingleCardView from './pages/SingleCardView';
import MyBookingPage from './pages/MyBookingPage';

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
     <Route element={<LoginPageAuth/>}>
     <Route path='/' element={<LoginPage />}/>
     </Route>
     <Route element={<Authorization/>}>
     <Route path='/home' element={<Home />}/>  
     <Route path='/myCourts' element={<MyCourtPage/>}/>
     <Route path='/SingleCardView/:id'element={ <SingleCardView/>}/>
     <Route path='/Bookings' element={<MyBookingPage/>}/>
     </Route>
     <Route element={<VenderAuth/>}>
     <Route path='/SingleCourtView/:id' element={ <SingleCourtViewPage />}/>
     <Route path='/courtRegistration' element={<CourtRegistration/>}/>
     </Route>

    </Routes>



    
    
    
    </BrowserRouter>
   
  );
}

export default App;
