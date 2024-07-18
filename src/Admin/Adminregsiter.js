import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Adminregister() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      let response = await axios.post('https://real-estate-backend-1-6bdi.onrender.com/api/admin/register', { ...data, isAdmin: "true" })
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-cover h-screen w-screen flex justify-center items-center' style={{ backgroundImage: `url('https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg')` }}>
      <div className='backdrop-grayscale-0 bg-white/75 shadow-2xl w-full max-w-lg p-6 rounded-md'>
        <h1 className='text-center text-2xl font-bold mb-4'>Admin Register</h1>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col md:flex-row md:gap-10'>
            <div className='mb-4 w-full'>
              <label htmlFor="name">Name</label>
              <input type="text" {...register("name", { required: true })} id="name" className='w-full p-2 rounded' />
              {errors.name && <p className='text-red-500 text-sm'>This field is required</p>}
            </div>
            <div className='mb-4 w-full'>
              <label htmlFor="email">Email</label>
              <input type="email" {...register("email", { required: true })} id="email" className='w-full p-2 rounded' />
              {errors.email && <p className='text-red-500 text-sm'>Please enter a valid email address</p>}
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:gap-10'>
            <div className='mb-4 w-full md:w-1/2'>
              <label htmlFor="password">Password</label>
              <input type="password" {...register("password", { required: true })} id="password" className='w-full p-2 rounded' />
              {errors.password && <p className='text-red-500 text-sm'>This field is required</p>}
            </div>
            <div className='mb-4 w-full md:w-1/2'>
              <label htmlFor="age">Age</label>
              <input type="number" {...register("age", { required: true })} id="age" className='w-full p-2 rounded' />
              {errors.age && <p className='text-red-500 text-sm'>Please enter a valid age</p>}
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <button type="submit" className='bg-blue-500 text-white p-2 rounded mb-2 w-full md:w-auto'>Submit</button>
            <Link to='/somepath'><p className='text-blue-500'>Have an account? Login</p></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adminregister;


