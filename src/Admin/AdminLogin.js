import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

function AdminLogin() {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    

    const onSubmit = async (data) => {
        try {

        

            let response = await axios.post('http://localhost:3001/admin/login',{...data,isAdmin:"true"}, )
            let userId = response.data._id
            localStorage.setItem('userId', userId)
            navigate('/admin/dashboard')



        } catch (error) {
            console.log(error);

        }
};


return (
    <>
    <h1>
        Admin Login
    </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <p>Email is required and must be valid</p>}

            <label>Password</label>
            <input type="password" {...register("password", { required: true })} />
            {errors.password && <p>Password is required</p>}

            <label htmlFor=""></label>

            <button type="submit">Submit</button>

            <Link to='/admin/register'><p>their is no account?</p></Link>
        </form>
    </>
)
}

export default AdminLogin

