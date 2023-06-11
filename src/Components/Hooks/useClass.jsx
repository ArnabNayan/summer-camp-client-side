import {  QueryCache, useMutation, useQuery } from "@tanstack/react-query";


const useClass = () => {
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
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
          });
        },
        {
          onSuccess: () => {
            QueryCache.invalidateQueries('instructorclass');
          }
        }
      );

     return [instructorclass,loading,refetch,updateClassStatus]
}
    

export default useClass;