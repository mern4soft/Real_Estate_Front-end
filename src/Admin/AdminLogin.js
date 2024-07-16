import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

function AdminLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            let response = await axios.post('https://real-estate-backend-1-6bdi.onrender.com/api/admin/login', { ...data, isAdmin: "true" });
            let userId = response.data._id;
            localStorage.setItem('userId', userId);
            navigate('/admin/dashboard');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bg-cover h-screen w-screen flex justify-center items-center' style={{ backgroundImage: `url('https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg')` }}>
            <div className='backdrop-grayscale-0 bg-white/75 shadow-2xl w-[300px] p-6 rounded-md'>
                <h1 className='text-center text-2xl font-bold mb-4'>Admin Login</h1>
                <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label>Email</label>
                        <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className='w-full p-2 rounded' />
                        {errors.email && <p className='text-red-500 text-sm'>Email is required and must be valid</p>}
                    </div>
                    <div className='mb-4'>
                        <label>Password</label>
                        <input type="password" {...register("password", { required: true })} className='w-full p-2 rounded' />
                        {errors.password && <p className='text-red-500 text-sm'>Password is required</p>}
                    </div>
                    <div className='flex flex-col items-center'>
                        <button type="submit" className='bg-blue-500 text-white p-2 rounded mb-2'>Submit</button>
                        <Link to='/admin/register'><p className='text-blue-500'>There is no account?</p></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
