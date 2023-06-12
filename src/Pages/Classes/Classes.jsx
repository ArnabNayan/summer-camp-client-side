import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Classdetails from "./Classdetails";



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
     
 {classes.map((item) =><Classdetails key={item._id}item={item}></Classdetails> )}
 </div>
        </div>
    );
};

export default Classes;