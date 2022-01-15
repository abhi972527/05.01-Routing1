// import logo from './logo.svg';
import './App.css';
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { Route, Routes } from "react-router-dom";
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Login } from './components/Login';
import {PrivateRoute} from './components/PrivateRoute';

function App() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
          <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>}></Route>
          <Route path="/users/:userid" element={<PrivateRoute><UserDetails /></PrivateRoute>}></Route>
          <Route path="/users/admin" element={ <div>Admin Page</div> }></Route>
          <Route path="/product/:id" element={<Products />}></Route>
          <Route path="/login" element={ <Login/> }></Route>
          <Route path="*" element={<div>404 Page not found</div>}></Route>
        </Routes>
      </div>
    );
  }

export default App;
