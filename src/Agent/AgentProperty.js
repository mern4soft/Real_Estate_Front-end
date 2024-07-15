import { Avatar, Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'


function AgentProperty() {


  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const [propertyData, setPropertyData] = useState({
    propertyName: "",
    holderName: "",
    propertyPrice: '',
    propertyAddress: ''
  })


  console.log(data, 'vbjkl');




  function handleInputChange(e) {
    const { name, value } = e.target;
    setPropertyData({
      ...propertyData,
      [name]: value,
    });
  }

  let id = localStorage.getItem("userId")
  console.log(id, 'agent id');


  useEffect(() => {
    const fetchData = async () => {
      try {

        let getProperty = await axios.get('https://real-estate-backend-1-6bdi.onrender.com/createtypeofprop')
        setData(getProperty.data)
        let getPropertyofAgent = await axios.get(`https://real-estate-backend-1-6bdi.onrender.com/property/${id}`)
        setData2(getPropertyofAgent.data)


      } catch (error) {

        console.log(error);

      }
    }

    fetchData()
  }, [])



  function handleUpdate(item) {
    setPropertyData({
      _id: item._id,
      propertyName: item.propertyName,
      holderName: item.holderName,
      propertyPrice: item.propertyPrice,
      propertyAddress: item.propertyAddress

    })

    handleOpen()
  }


  const handleSubmit= async() =>{
    try {
      
      if (!propertyData._id) {
        const submit = await axios.post('https://real-estate-backend-1-6bdi.onrender.com/createtypeofprop', propertyData);
        console.log(submit);
      } else {
        
        const update = await axios.put(`https://real-estate-backend-1-6bdi.onrender.com/createtypeofprop/${propertyData._id}`, propertyData);
        console.log(update);
      }

    handleOpen()
    } catch (error) {
      console.log(error);
    }

  }


  const handleDelete = async(item) =>{
    try {

      let response =  await axios.delete(`https://real-estate-backend-1-6bdi.onrender.com/createtypeofprop/${item._id}`)
      console.log(response.data);
      
    } catch (error) {
      
      console.log(error);
    }
   
  }

  return (
    <div>
      <Button onClick={handleOpen}>Add Property</Button>
      
      
      <table>
        <thead>
          <tr>
            <th>propertyName</th>
            <th>holderName</th>
            <th>propertyImage</th>
            <th>propertyPrice</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id}>
              <td><Avatar src={item.propertyImage}/></td>
              <td>{item.propertyName}</td>
              <td>{item.holderName}</td>
              <td>{item.propertyPrice}</td>
              <td>
                <Button onClick={()=>handleUpdate(item)}>update</Button>
                <Button onClick={()=>handleDelete(item)}>Delete</Button>
              </td>

            </tr>

          ))}
        </tbody>
      </table>





      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Long Dialog</DialogHeader>
        <DialogBody className="h-[42rem] overflow-scroll">
          <Typography className="font-normal">
            <form >
              <label htmlFor="propertyName">Property Name</label>
              <input
                type="text"
                id="propertyName"
                name="propertyName"
                value={propertyData.propertyName}
                placeholder='propertyName'
                onChange={handleInputChange}
              />
              <label htmlFor="holderName">Property Holder Name</label>
              <input
                type="text"
                id="holderName"
                name="holderName"
                value={propertyData.holderName}
                placeholder='holderName'
                onChange={handleInputChange}
              />
              <label htmlFor="propertyImage">Property Image</label>
              <input
                type="text"
                id="propertyImage"
                name="propertyImage"
                onChange={handleInputChange}
              />
              <label htmlFor="propertyPrice">Property Price</label>
              <input
                type="number"
                id="propertyPrice"
                name="propertyPrice"
                placeholder='propertyPrice'
                value={propertyData.propertyPrice}
                onChange={handleInputChange}
              />
              <label htmlFor="propertyAddress">Property Address</label>
              <textarea
                name="propertyAddress"
                id="propertyAddress"
                cols="30"
                rows="10"
                placeholder='propertyAddress'
                value={propertyData.propertyAddress}
                onChange={handleInputChange}
              ></textarea>

            </form>
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit} >
            confirm
          </Button>
        </DialogFooter>
      </Dialog>

    </div>

  )
}

export default AgentProperty

