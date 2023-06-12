import {  QueryCache,  useMutation,  useQuery } from "@tanstack/react-query";
// import { useMutation } from "react-query";
// import { useMutation, useQueryCache,useQuery } from "@tanstack/react-query";

const useClass = () => {
    const queryCache = new QueryCache();
    const {data:instructorclass=[],isLoading:loading,refetch}=useQuery({
        queryKey:['instructorclass'],
        queryFn:async()=>{
         const res=await fetch('http://localhost:5000/instructorclass');
         return res.json()
        } 
     });

     const updateClassStatus = useMutation(
        async ({ id, status }) => {
          await fetch(`http://localhost:5000/instructorclass/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
          });
        },
        {
          onSuccess: () => {
            queryCache.invalidateQueries('instructorclass');
          }
        }
      );

   
   
     return [instructorclass,loading,refetch, updateClassStatus]
}
    

export default useClass;