import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

function Adminregister() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      let response = await axios.post('http://localhost:3001/admin/signup', { ...data, isAdmin: "true" })
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" {...register("name", { required: true })} id="name" />
        {errors.name && <span>This field is required</span>}

        <label htmlFor="email">Email</label>
  eeee
        {errors.email && <span>Please enter a valid email address</span>}

        <label htmlFor="password">Password</label>
        <input type="text" {...register("password", { required: true })} id="password" />
        {errors.password && <span>This field is required</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Adminregister;
