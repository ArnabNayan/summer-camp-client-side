import { useEffect, useState } from "react";
import HeadingTitle from "../HeadingTitle/HeadingTitle";



const Instructorss = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <section>
        
            <HeadingTitle heading='Our Top Instructors'>
            </HeadingTitle>
               
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14">
                {instructors.map((instructor, index) => (
                  <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl ">
                    <figure><img className="w-full h-96" src={instructor.image_url} alt="Instructor" /></figure>
                    <div className="card-body mx-auto">
                      <h2 className="card-title font-serif">{instructor.name}</h2>
                    </div>
                  </div>
                ))
            }
            </div>
        </section>
    );
};

export default Instructorss;