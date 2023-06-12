import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const useSelectClass = ()=> {
    const {user}=useContext(AuthContext)
    const {isLoading,refetch,data: classes=[]}=useQuery({
        queryKey:['class',user?.email],
        queryFn:async()=>{
          const res=await fetch(`http://localhost:5000/class?email=${user.email}`)
          return res.json();
        },
    })
    return [classes,isLoading,refetch]
};

export default useSelectClass;