import React from 'react'

import Nav from '../items/Navbar'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react'

function Landing() {



  return (
    <div>
      <Nav  />

      <Link to='/admin/login'><Button>Admin Login</Button></Link>
      
      <Link to='/agent/login'><Button>Agent Login</Button></Link>
      
      <Link to='/user/login'><Button>User Login</Button></Link>

      
      
    </div>
  )
}

export default Landing
