import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { useState } from 'react';
import { PrivateRoute } from './components/PrivateRoute';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {

  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div className="App">
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login setIsLoggedin={setIsLoggedin} />}></Route>
        <Route path='/signup' element={<Signup setIsLoggedin={setIsLoggedin}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedin={isLoggedin}>
            <Dashboard />
          </PrivateRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
