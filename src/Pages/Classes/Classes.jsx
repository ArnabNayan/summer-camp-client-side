import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";



const Classes = () => {
    const [classes, setClasses] = useState([]);

    const fetchClasses = async () => {
      try {
        const res = await fetch('http://localhost:5000/instructorclass');
        const data = await res.json();
        setClasses(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };
  
    useEffect(() => {
      fetchClasses();
    }, []);
  
    return (
        <div>
             <Helmet>
            <title>Sports Academy | Classes</title>
         </Helmet>
         
    {/* <h2 className="tex-center mt-20 mx-auto text-pink-600  text-3xl border-slate-300 font-bold  uppercase border-y-4 py-4">All Classes</h2> */}
      
 <div className="grid grid-cols-1 md:grid-cols-3 ">
     
 {classes.map((classItem) => (


<div key={classItem._id} className="card w-96  bg-base-100 shadow-xl mt-24">

<figure><img className="w-96 h-96" src={classItem.photo} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">Name: {classItem.classname}</h2>
<p>Instructor: {classItem.instructorname}</p>
<p>Available Seats: {classItem.availableseats}</p>
<p>Price: {classItem.price}</p>
<div className="card-actions justify-end">
<button className="btn btn-secondary mx-auto">Select</button>
</div>
</div>
</div>

))}
 </div>
        </div>
    );
};

export default Classes;