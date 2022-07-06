
import { Route, Routes } from 'react-router-dom'
import './App.css'

import {Navbar} from "./components/navbar"
import {Home} from "./components/Home"
import {JobDescription} from "./components/jobDescription"
import {SignUp} from "./components/Signup"
import {Login } from "./components/Login"

function App() {
 

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path="/:id" element={<JobDescription></JobDescription>}></Route>
       <Route path='/register' element={<SignUp></SignUp>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
   
    </div>
  )
}

export default App
