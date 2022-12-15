import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUP = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {createUser} = useContext(AuthContext);
    const handleSignUp = (data) =>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error));
    }
      
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Signup</h2>
                <form >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" />
                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" />
                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget password?</span></label>
                        
                    </div>
                    <input className='btn btn-accent w-full' value="SignUP" type="submit" />
                </form>
                <p>Already have an Account: <Link className='font-bold text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">Or</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUP;