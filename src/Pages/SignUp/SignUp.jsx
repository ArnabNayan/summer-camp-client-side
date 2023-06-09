import { Helmet } from "react-helmet-async";
import SocialLogin from "../SocialLogin/SocialLogin";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser}=useContext(AuthContext);
    const onSubmit=data=>{
        console.log(data)
        createUser(data.email,data.password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
    };
    

    return (
        <>
        <Helmet>
            <title>Sports Academy | Signup</title>
           </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center text-pink-600">Signup now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-12">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name",{ required: true })} name="name" placeholder="Enter Your Name" className="input input-bordered" />
                {errors.name && <span className="text-red-500">Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  {...register("email",{ required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-500">Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input type="photo"  {...register("PhotoUrl",{ required: true })} placeholder="Your PhotoUrl" className="input input-bordered" />
                {errors.photo && <span className="text-red-500">Photo is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password",{ required: true,
                    minLength: 6,
                    pattern:/(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}/ })} name="password" placeholder="password" className="input input-bordered" />
                     {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one upper case,one lower case,one number and one speacial  characters</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password"  {...register("confirm password")} name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Signup" />
              </div>
            </form>
            <p><small>Already have an Account?<Link className="text-blue-600 underline" to="/login">Login</Link> </small></p>
            <SocialLogin></SocialLogin>
          </div>
       
        </div>
      </div>
      </>
    );
};

export default SignUp;