
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import UserDetail from './component/UserDetail';


function App() {
  let [userData,setuserData]  =useState("")
  let [urldata,seturldata]  =useState('')
  return (
    <>
 <Navbar userData={userData} setuserData={setuserData} seturldata={seturldata}/>
    <UserDetail urldata={urldata}/>
    </>
  );
}

export default App;
