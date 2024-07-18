import React, { useEffect, useState } from 'react'
import Landing from '../pages/Land'
import Card from '../items/Card'
import axios from 'axios'


function AgentDashboard() {

const [data,setData] =useState([])

useEffect(()=>{

  let fetchdata = async() =>{
     let response = await axios.get('https://real-estate-backend-1-6bdi.onrender.com/createtypeofprop')
     console.log(response.data);
     setData(response.data)
  }

  fetchdata()
},[])




  return (
    <div>
      <div className='container mx-auto p-5 text-white bg-blue-gray-900 shadow-md w-100% h-auto rounded-2xl '>
        <h1 className='text-xl text-center border p-5 rounded-xl' >Added property</h1>
       
          <Card  data={data}/>
       


      </div>


    </div>

  )
}

export default AgentDashboard
