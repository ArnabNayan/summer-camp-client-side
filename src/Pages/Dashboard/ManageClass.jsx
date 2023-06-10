import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import useClass from "../../Components/Hooks/useClass";



const ManageClass = () => {
    const [instructorclass]=useClass()


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
        <th>Status</th>
        <th>Status</th>
        
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        instructorclass.map((instructorclasses,index)=>  <tr key={instructorclasses._id}>
            <th>{index+1}</th>
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
                <button className="btn btn-ghost btn-xs">pending</button>
            </td>
            <td>
                <button className="btn btn-ghost btn-xs">approved</button>
            </td>
            <td>
                <button className="btn btn-ghost btn-xs">denied</button>
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