import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginerror, sertLoginError] = useState('');

    const handleLogin = data => {
        console.log(data);
        sertLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error.message)
                sertLoginError(error.message);
            });

    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                require: "Email Address is require"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">password</span></label>
                        <input type="password" {...register("password", {
                            required: "password is required",
                            minLength: { value: 6, message: 'password must be 6 characters or longer' }


                        })} className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Login" type="submit" />
                    <div>
                        {loginerror && <p>{loginerror}</p>}
                    </div>

                </form>
                <p>New to Doctors portal : <Link className='font-bold text-secondary' to="/signup">Creater new Account</Link></p>
                <div className="divider">Or</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;