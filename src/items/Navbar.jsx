// import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-[60px]  rounded-3xl p-3 flex justify-between align-middle backdrop-blur-xl bg-white/30 ring-black ring-2'>
      <h1 className='text-[34px]  libre-barcode-39-text-regular'>REALS8</h1>
      <div className='flex gap-4 flex-wrap'>
        <Link to='/admin/login'><button className=' rounded-2xl  p-2 ring-2 ring-black text-white' >Admin Login</button></Link>

        <Link to='/agent/login'><button  className=' rounded-2xl  p-2 ring-2 ring-black text-white'>Agent Login</button></Link>

        <Link to='/user/login'><button className=' rounded-2xl  p-2 ring-2 ring-black text-white' >User Login</button></Link>
      </div>
      


    </div>
  )
}

export default Navbar