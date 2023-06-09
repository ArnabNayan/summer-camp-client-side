import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const useInstructor = () => {
   const {user,loading}=useContext(AuthContext)
   const [axiosSecure]=useAxiosSecure();
   const {data:isInstructor,isLoading:isInstructorLoading}=useQuery({
    queryKey:['isInstructor',user?.email],
    enabled:!loading,
    queryFn:async()=>{
        const res=await axiosSecure.get(`/users/instructors/${user?.email}`);
        console.log('is Instructor response',res)
        return res.data.instructors;
    }
   })
   return [isInstructor,isInstructorLoading]
};

export default useInstructor;