import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

function AgentLogin() {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {

        

            let response = await axios.post('https://real-estate-backend-1-6bdi.onrender.com/agent/login', {...data,isAgent:"true"})
            let userId = response.data.Agent._id
            let token = response.data.Token
            console.log(userId,token);
            localStorage.setItem('userId', userId)
            localStorage.setItem('Token',token)
            navigate('/agent/dashboard')



        } catch (error) {
            console.log(error);

        }
};


return (
    <>

    <h1>
        Agent Login
    </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <p>Email is required and must be valid</p>}

            <label>Password</label>
            <input type="password" {...register("password", { required: true })} />
            {errors.password && <p>Password is required</p>}

            <button type="submit">Submit</button>

            <Link to='/agent/register'><p>their is no account?</p></Link>
        </form>
    </>
)
}

export default AgentLogin

