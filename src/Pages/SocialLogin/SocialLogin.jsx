import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <div className="divider">OR</div> 
            <p className="text-center">Sign In With</p> 
          <div className="w-full text-center my-4">
          <button className="btn btn-circle btn-outline  text-blue-500">
                  <FaGoogle></FaGoogle> 
            </button>
          </div> 
        </div>
    );
};

export default SocialLogin;