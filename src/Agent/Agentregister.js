import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

function Agentregister() {
  const { register, handleSubmit, formState: { errors } } = useForm();

 
  const onSubmit = async (data) => {

    try {

      

      let response = await axios.post('http://localhost:3001/agent/register', { ...data, isAgent: "true" })
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }


  };



  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">name</label>
        <input type="text" {...register("name", { required: true })} id="name" />
        {errors.name && <span>This field is required</span>}

        <label htmlFor="email">email</label>
        <input type="text" {...register("email", { required: true })} id="email" />
        {errors.email && <span>Please enter a valid email address</span>}

        <label htmlFor="password">password</label>
        <input type="text" {...register("password", { required: true })} id="password" />
        {errors.password && <span>This field is required</span>}


        <label htmlFor="age">Age</label>
        <input type="text" {...register("age", { required: true })} id="age" />
        {errors.age && <span>Please enter a valid age</span>}


        <label htmlFor="number">Number</label>
        <input type="text" {...register("number", { required: true })} id="number" />
        {errors.number && <span>Please enter a valid number</span>}


        <label htmlFor="occupation">Occupation</label>
        <input type="text" {...register("occupation", { required: true })} id="occupation" />
        {errors.occupation && <span>This field is required</span>}


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Agentregister;
