import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from './Admin/AdminLayout';
import Dashboard from './Admin/Dashboard';
import Buyer from './Admin/Buyer';
import Property from './Admin/Property';
import Members from './Admin/Members';
import AgentDashboard from './Agent/AgentDashboard';
import AgentProperty from './Agent/AgentProperty';
import AgentCommunication from './Agent/AgentCommunication';
import AgentLayout from './Agent/AgentLayout';
import UserLayout from './User/UserLayout';
import UserDashboard from './User/UserDashboard';
import AdminLogin from './Admin/AdminLogin';
import AgentLogin from './Agent/AgentLogin';
import UserLogin from './User/UserLogin';
import Adminregister from '../src/Admin/Adminregsiter';
import Agentregister from '../src/Agent/Agentregister';
import Userregister from '../src/User/Userregister';
import Landing from './pages/Land';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/agent/login' element={<AgentLogin/>}/> 
        <Route path='/user/login' element={<UserLogin/>}/>
        <Route path='/admin/register' element={<Adminregister/>}/>
        <Route path='/agent/register' element={<Agentregister/>}/> 
        <Route path='/user/register' element={<Userregister/>}/>
        
        <Route path='/admin' element={<AdminLayout />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='property' element={<Property />} />
          <Route path='member' element={<Members />} />
          <Route path='buyer' element={<Buyer />} />
        </Route>
        <Route path='/agent' element={<AgentLayout/>}>
          <Route path='dashboard' element={<AgentDashboard/>} />
          <Route path='property' element={<AgentProperty/>}/>
          <Route path='Communication' element={<AgentCommunication/>}/>
        


        </Route>
        <Route path='/user' element={<UserLayout/>}>
          <Route path='dashboard' element={<UserDashboard/>}/>
          

        </Route>







      </Routes>
    </BrowserRouter>
  )
}

export default App
