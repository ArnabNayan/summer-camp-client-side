import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectClass from "../../Components/Hooks/useSelectClass";


const Classdetails = ({item}) => {
    const {classname,photo,instructorname,availableseats,price,_id}=item;
    const {user}=useContext(AuthContext);
    const [,refetch]=useSelectClass()
    const navigate=useNavigate();
    const location=useLocation();
    const handleSelect=item=>{
        console.log(item)
        if(user && user.email){
            const selectClass={classId:_id,classname,photo,instructorname,availableseats,price,email:user.email}
            fetch('http://localhost:5000/class',{
                method:'POST',
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(selectClass)
              })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                  refetch();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class is added',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
              })
        }
       else{
        Swal.fire({
            title: 'Please login first',
           
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now'
          }).then((result) => {
            if (result.isConfirmed) {
             navigate('/login',{state:{from:location}})
            }
          })
       }
    }
  
    return (
        <div className="card w-96  bg-base-100 shadow-xl mt-24">

        <figure><img className="w-96 h-96 hover:scale-110" src={photo} alt="Shoes" /></figure>
        <div className="card-body">
        <h2 className="card-title">Name: {classname}</h2>
        <p>Instructor: {instructorname}</p>
        <p>Available Seats: {availableseats}</p>
        <p>Price: {price}</p>
        <div className="card-actions justify-end">
        <button  onClick={()=>handleSelect(item)} className="btn btn-secondary mx-auto">Select</button>
        </div>
        </div>
        </div>
    );
};

export default Classdetails;