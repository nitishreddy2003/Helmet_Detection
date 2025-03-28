import './App.css';
import Login from './components/Login'
import Home from './components/Homepage'
import Signup from './components/SignUp'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import React,{ useState } from 'react';

function App() {
  const [ user, setLoginUser] = useState({});
  var props={
    user:user,
    setLoginUser:setLoginUser
  }

  return (
    <div className="App">
      <Home details={props}/>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ (user && user._id) ? <Home details={props}/> : <Login setLoginUser={setLoginUser}/>} />
          <Route path="/login" element={ <Login setLoginUser={setLoginUser}/> } />
          <Route path="/signup" element={ <Signup/> } />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
