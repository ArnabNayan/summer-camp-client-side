// import { useState } from "react";

import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
// import useClass from "../../Components/Hooks/useClass";
import { useState, useEffect } from 'react';
const ManageClass = () => {
    // const [instructorclass, refetch] = useClass()
  
    const [instructorclass, setInstructorClass] = useState([]);
 
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/instructorclass');
        const data = await res.json();
        setInstructorClass(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleApprove = async (id) => {
      try {
        
        await fetch(`http://localhost:5000/instructorclass/${id}/approve`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
        });
        fetchData();
      } catch (error) {
        console.error('Error approving class:', error);
      } 
    };
  
    const handleDeny = async (id) => {
      try {
     
        await fetch(`http://localhost:5000/instructorclass/${id}/deny`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
        });
        fetchData();
      } catch (error) {
        console.error('Error denying class:', error);
      }
    };
    return (
        <div className="w-auto">
            <HeadingTitle heading='My Class'>
            </HeadingTitle>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>

                            <th>Status</th>

                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorclass.map((instructorclasses, index) => <tr key={instructorclasses._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={instructorclasses.photo} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{instructorclasses.classname}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{instructorclasses.instructorname} </td>
                                <td>{instructorclasses.email} </td>
                                <td>{instructorclasses.availableseats} </td>
                                <td>{instructorclasses.price}</td>


                                <td>
                                    <button className="btn btn-ghost btn-xs">
                                        {instructorclasses.status || 'pending'}
                                    </button>
                                </td>
                   
                                 <td>
                  <button className="btn btn-ghost btn-xs" onClick={() => handleApprove(instructorclasses._id)}>
                    Approve
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs" onClick={() => handleDeny(instructorclasses._id)}>
                    Deny
                  </button>
                </td> 


                               
                                <td>
                                    <button className="btn btn-ghost btn-xs">Feedback</button>
                                </td> 
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default ManageClass;