import React, {useContext, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Tasks from "./pages/Tasks";
import Notifications from "./pages/Notifications";
import './styles/wrapper-styles.css';
import {Auth, IAuth} from './context/isAuth';
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

function App() {

const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <BrowserRouter>
      <div className={"wrapper"}>
        <div className={"container"}>
          <Auth.Provider value={{
            isAuth,
            setIsAuth
          }}>
            {
              !isAuth ?

                <Routes>
                  <Route path="/" element={<Welcome/>}/>
                  <Route path="/login" element={<Login/>}/>
                </Routes>
                :
                <>
                  <Menu/>
                  <Routes>
                    <Route path="/" element={<Tasks/>}/>
                    <Route path="/notifications" element={<Notifications/>}/>
                  </Routes>
                </>
            }
          </Auth.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
