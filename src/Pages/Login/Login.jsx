import { Helmet } from "react-helmet-async";
import {Link,useLocation,useNavigate} from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
const Login = () => {
  const { register, handleSubmit} = useForm();
  const { signIn}=useContext(AuthContext);
  const navigate=useNavigate()
  const location=useLocation()
  const from=location.state?.from?.pathname || "/";
  const onSubmit=data=>{
      console.log(data);
      signIn(data.email,data.password)
      .then(result=>{
        const user=result.user;
        console.log(user)
        Swal.fire({
          title: 'Login Successful',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        navigate(from,{replace:true});
      })
      .catch(error=>{
        console.log(error.message)
    })
  };
  
    return (
      <>
        <Helmet>
            <title>Sports Academy | Login</title>
           </Helmet>
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center text-pink-600">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-16">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"{...register("email")} name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password")} name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p><small>New Here?Please, <Link className="text-blue-600 underline" to="/signup">Signup</Link> </small></p>
            <SocialLogin></SocialLogin>
          </div>
       
        </div>
      </div>
      </>
    );
};

export default Login;