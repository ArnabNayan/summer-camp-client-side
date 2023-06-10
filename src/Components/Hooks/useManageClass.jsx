import { useQuery } from "@tanstack/react-query";


const useManageClass = () => {
    const {data:instructorclass=[],isLoading:loading,refetch}=useQuery({
        queryKey:['instructorclass'],
        queryFn:async()=>{
         const res=await fetch('http://localhost:5000/instructorclass');
         return res.json()
        } 
     })
     return [instructorclass,loading,refetch]
};

export default useManageClass;