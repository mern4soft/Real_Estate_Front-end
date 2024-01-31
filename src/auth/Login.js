import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function Login() {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {

        

            let response = await axios.post('http://localhost:3001/agent/login', data)
            let userId = response.data._id
            localStorage.setItem('userId', userId)
            navigate('/agent/property')



        } catch (error) {
            console.log(error);

        }
};


















    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <p>Email is required and must be valid</p>}

                <label>Password</label>
                <input type="password" {...register("password", { required: true })} />
                {errors.password && <p>Password is required</p>}

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Login
