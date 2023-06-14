import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Postoverview from './pages/Postoverview';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/Profile';


function App() {
    return ( <div className='app-bg'>
       
      <Router>
          <Navbar />
<Routes>
   
<Route exact path='/' element={<Login />} ></Route>
<Route exact path='/login' element={<Login />} ></Route>
<Route exact path='/signup' element={<Signup />} ></Route>
<Route exact path='/posts' element={<Postoverview />} ></Route>
<Route exact path='/myprofile' element={<Profile />} ></Route>
</Routes>

      </Router>
      
         </div>
    );
}

export default App;