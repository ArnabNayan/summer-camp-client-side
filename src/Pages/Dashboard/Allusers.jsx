import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Allusers = () => {
    const {data:users=[],refetch}=useQuery(['users'],async()=>{
        const res=await fetch('http://localhost:5000/users')
        return res.json()
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
        <th>Role</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user,index)=>
                <tr key={user._id}>
                <th>{index+1}</th>
                <td>{user.name} </td>
                <td>{user.email}</td>
                <td>{user.role==='admin'?<button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-ghost  bg-pink-600 text-white">Admin </button>:<button  className="btn btn-ghost  bg-pink-600 text-white">Users </button>} </td>
                <td>{user.role==='instructors'?<button onClick={()=>handleMakeInstructors(user._id)} className="btn btn-ghost  bg-putple-600 text-white">Instructors </button>:<button  className="btn btn-ghost  bg-pink-600 text-white">Users </button>} </td>
              </tr>
            )
        }
      
     
    
    </tbody>
  </table>
</div>            
        </div>
    );
};

export default Allusers;