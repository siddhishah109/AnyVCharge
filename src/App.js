import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import NavBar from './components/navbar';
import Notification from './Pages/notification';
import Profile from './Pages/profile';
import Home from './Pages/home';
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
