import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

const Allusers = () => {
  
    const [axiosSecure]=useAxiosSecure()
    const {data:users=[],refetch}=useQuery(['users'],async()=>{
      const res=await axiosSecure.get('/users')
      return res.data;
    })
    
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
          method: 'PATCH'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
        
      }

      const handleMakeInstructors = user => {
        fetch(`http://localhost:5000/users/instructors/${user._id}`, {
          method: 'PATCH'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Instructors Now!`,
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
      }

    return (
        <div className="w-full">
             <Helmet>
            <title>Sports Academy | All Users</title>
           </Helmet>
            <h3 className="text-3xl font-semibold text-center my-4">Total Users:{users.length}</h3>

            <div className="overflow-x-auto ">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Make Admin</th>
        <th>Make Instructors</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user,index)=>
                <tr key={user._id}>
                <th>{index+1}</th>
                <td>{user.name} </td>
                <td>{user.email}</td>
                <td>{user.role==='admin'? 'admin':<button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost  bg-pink-600 text-white"><FaUserShield></FaUserShield></button>} </td>
                <td>{user.role==='instructors'?'instructors':<button onClick={()=>handleMakeInstructors(user)} className="btn btn-ghost  bg-purple-600 text-white"><FaUserShield></FaUserShield> </button>} </td>
              </tr>
            )
        }
      
      {/* <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost  bg-pink-600 text-white">Admin </button> */}
      {/* <button onClick={()=>handleMakeInstructors(user)} className="btn btn-ghost  bg-putple-600 text-white">Instructors </button> */}
    </tbody>
  </table>
</div>            
        </div>
    );
};

export default Allusers;