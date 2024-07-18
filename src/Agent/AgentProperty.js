import { Avatar, Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AgentProperty() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [refresh, setRefresh] = useState(true);
  const [image, setImage] = useState(null);
  const [propertyData, setPropertyData] = useState({
    propertyName: "",
    holderName: "",
    propertyPrice: '',
    propertyAddress: '',
    propertyImage: ''
  });

  const handleOpen = () => setOpen(!open);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPropertyData({
      ...propertyData,
      [name]: value,
    });
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPropertyData({
        ...propertyData,
        propertyImage: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  let id = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let getProperty = await axios.get('https://real-estate-backend-1-6bdi.onrender.com/createtypeofprop');
        setData(getProperty.data);
        let getPropertyofAgent = await axios.get(`https://real-estate-backend-1-6bdi.onrender.com/api/property/${id}`);
        setData2(getPropertyofAgent.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [refresh]);

  function handleUpdate(item) {
    setPropertyData({
      _id: item._id,
      propertyName: item.propertyName,
      holderName: item.holderName,
      propertyPrice: item.propertyPrice,
      propertyAddress: item.propertyAddress,
      propertyImage: item.propertyImage // Retain the existing image
    });
    handleOpen();
    setRefresh(!refresh);
  }

  const handleSubmit = async () => {
    try {
      if (!propertyData._id) {
        const submit = await axios.post('https://real-estate-backend-1-6bdi.onrender.com/property', propertyData);
        console.log(submit);
        setPropertyData('')
      } else {
        const update = await axios.put(`https://real-estate-backend-1-6bdi.onrender.com/property/${propertyData._id}`, propertyData);
        console.log(update);
        setPropertyData('')
      }
      handleOpen();
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (item) => {
    try {
      let response = await axios.delete(`https://real-estate-backend-1-6bdi.onrender.com/property/${item._id}`);
      console.log(response.data);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  let styled = 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider';
  
  return (
    <div className="p-4">
      <Button onClick={handleOpen}>Add Property</Button>
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-gray-50">
          <tr>
            <th className={styled}>Property Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Holder Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item._id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.propertyName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.holderName}</td>
              <td className="px-6 py-4 whitespace-nowrap"><Avatar src={item.propertyImage} /></td>
              <td className="px-6 py-4 whitespace-nowrap">{item.propertyPrice}</td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                <Button size="sm" onClick={() => handleUpdate(item)}>Update</Button>
                <Button size="sm" color="red" onClick={() => handleDelete(item)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Manage Property</DialogHeader>
        <DialogBody className="h-[15rem] overflow-scroll">
          <form>
            <div className="mb-4">
              <label htmlFor="propertyName" className="block text-sm font-medium text-gray-700">Property Name</label>
              <input
                type="text"
                id="propertyName"
                name="propertyName"
                value={propertyData.propertyName}
                placeholder='Property Name'
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="holderName" className="block text-sm font-medium text-gray-700">Property Holder Name</label>
              <input
                type="text"
                id="holderName"
                name="holderName"
                value={propertyData.holderName}
                placeholder='Holder Name'
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="propertyImage" className="block text-sm font-medium text-gray-700">Property Image</label>
              <input
                type="file"
                id="propertyImage"
                name="propertyImage"
                onChange={handleFileChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="propertyPrice" className="block text-sm font-medium text-gray-700">Property Price</label>
              <input
                type="number"
                id="propertyPrice"
                name="propertyPrice"
                placeholder='Property Price'
                value={propertyData.propertyPrice}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700">Property Address</label>
              <textarea
                name="propertyAddress"
                id="propertyAddress"
                cols="30"
                rows="3"
                placeholder='Property Address'
                value={propertyData.propertyAddress}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
          </form>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            Cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default AgentProperty;
