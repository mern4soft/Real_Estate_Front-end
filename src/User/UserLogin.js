import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

function UserLogin() {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {



            let response = await axios.post('https://real-estate-backend-1-6bdi.onrender.com/user/login', { ...data, isUser: "true" })
            let userId = response.data._id
            localStorage.setItem('userId', userId)
            navigate('/user/dashboard')



        } catch (error) {
            console.log(error);

        }
    };


    return (
        <>

            <h1>
                User Login
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <p>Email is required and must be valid</p>}

                <label>Password</label>
                <input type="password" {...register("password", { required: true })} />
                {errors.password && <p>Password is required</p>}

                <button type="submit">Submit</button>
                <Link to='/user/register'><p>their is no account?</p></Link>
            </form>
        </>
    )
}

export default UserLogin


