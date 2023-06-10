import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import useClass from "../../Components/Hooks/useClass";


const MyClass = () => {
    const[instructorclass]=useClass();
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
        <th>Status</th>
        <th>Status</th>
        
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        instructorclass.map((instructorclasses,index)=>  <tr key={instructorclasses._id}>
            <th>{index+1}</th>
            <td>{instructorclasses.classname}</td>
            <td>0</td>
            <td>Feedback</td>
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