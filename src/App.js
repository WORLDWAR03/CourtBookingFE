
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
import ForgotPassword from './components/forgetPassword/ForgetPassword';
import ResetPassword from './components/resetpassword/ResetPassword';
import CancelBookingPage from './pages/CancelBookingPage';

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
   
    <Route element={<LoginPageAuth/>}>
    <Route path='/' element={<LoginPage />}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>
    <Route path='/reset-password/:id/:token' element={<ResetPassword/>}/>
    </Route>
     <Route element={<Authorization/>}>
     <Route path='/home' element={<Home />}/>  
     <Route path='/SingleCardView/:id'element={ <SingleCardView/>}/>
     <Route path='/Bookings' element={<MyBookingPage/>}/>
     <Route path='/cancelpage/:id' element={<CancelBookingPage/>}/>
     
     </Route>
     <Route element={<VenderAuth/>}>
     <Route path='/myCourts' element={<MyCourtPage/>}/>
     <Route path='/SingleCourtView/:id' element={<SingleCourtViewPage />}/>
     <Route path='/courtRegistration' element={<CourtRegistration/>}/>
     </Route>

    </Routes>



    
    
    
    </BrowserRouter>
   
  );
}

export default App;
