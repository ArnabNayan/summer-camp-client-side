import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from './useAxiosSecure';
const useSelectClass = ()=> {
    const {user}=useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const {refetch,data:classes=[]} = useQuery({
        queryKey:['class',user?.email],
        // queryFn:async()=>{
        //   const res=await fetch(`http://localhost:5000/class?email=${user.email}`)
        //   return res.json();
        // },
        queryFn: async()=>{
            const res=await axiosSecure(`/class?email=${user?.email}`)
            console.log('res from axios',res)
           return res.data;
        },
    })
    return [classes,refetch]
};

export default useSelectClass;