import Swal from "sweetalert2";
import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import useSelectClass from "../../Components/Hooks/useSelectClass";
import { Link } from "react-router-dom";


const MyClasses = () => {
    const [classes,refetch]=useSelectClass()
    // const total=classes.reduce((sum,item)=>item.price+sum,0)

    const handlaDelete=classes=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/class/${classes._id}`,{
                method:'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })

            }
          })
    }
    return (
        <div className="w-full" >
               <HeadingTitle heading='My Selected Class'>
            </HeadingTitle>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-2xl">Total selected class:{classes.length}</h3>
                {/* <h3 className="text-2xl">Total Price:${total}</h3> */}
            </div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            classes.map((classes,index)=> <tr key={classes._id}>
   
             <td>
             {index+1}
            </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={classes.photo}alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{classes.classname}</div>
                 
                    </div>
                  </div>
                </td>
                <td>
                 {classes.price}
                
                </td>
               
                <th>
                  <Link to="/dashboard/payment"> <button className="btn btn-secondary btn-xs">Pay</button></Link> 
              
                </th>
                <th>
                  <button onClick={()=>handlaDelete(classes)} className="btn btn-primary btn-xs">Delete</button>
                </th>
              </tr>)
        }
     
     
   
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default MyClasses;


