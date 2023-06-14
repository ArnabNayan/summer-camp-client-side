import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";




const Instructors = () => {
  const [instructors, setInstructors] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => setInstructors(data))
}, [])
  return (
    <div>
       <Helmet>
            <title>Sports Academy | Instructors</title>
           </Helmet>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {instructors.map((instructor, index) => (
                  <div key={index} className="card card-compact mt-24 w-96 bg-base-100 shadow-xl ">
                    <figure><img className="w-full h-96 hover:scale-110" src={instructor.image_url} alt="Instructor" /></figure>
                    <div className="card-body mx-auto">
                      <h2 className="card-title font-serif">{instructor.name}</h2>
                      <p className="card-title font-serif">{instructor.email}</p>
                    </div>
                  </div>
                ))
            }
            </div>
    </div>
  );
};

export default Instructors;