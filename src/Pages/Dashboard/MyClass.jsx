// import { useState } from "react";
import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import useClass from "../../Components/Hooks/useClass";

const MyClass = () => {
    const [instructorclass,updateClassStatus] = useClass();
    const handleUpdateStatus = async (id, status) => {
        await updateClassStatus.mutateAsync({ id, status });
      };
    return (
        <div className="w-full">
            <HeadingTitle heading='My Class'>
            </HeadingTitle>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Total Enrolled Students</th>
                            <th>Feedback</th>
                            <th>Status</th>
                          
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorclass.map((instructorclasses, index) => <tr key={instructorclasses._id}>
                                <th>{index + 1}</th>
                                <td>{instructorclasses.classname}</td>
                                <td>0</td>
                                <td>Feedback</td>
                                <td>
                                <button className="btn btn-ghost btn-xs">
                    {instructorclasses.status || 'pending'}
                  </button>
                            </td>
                            <td>
                  {instructorclasses.status === 'pending' && (
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleUpdateStatus(instructorclass._id, 'approved')}
                    >
                      Approve
                    </button>
                  )}
                  {instructorclasses.status === 'pending' && (
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleUpdateStatus(instructorclass._id, 'denied')}
                    >
                      Deny
                    </button>
                  )}
                </td>

                                <td>
                                    <button className="btn btn-ghost btn-xs">update</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
           
        </div>
    );
};

export default MyClass;

{/* <td>
<button  className="btn btn-ghost btn-xs">approved</button>
</td>
<td>
<button className="btn btn-ghost btn-xs"  >denied</button>
</td> */}