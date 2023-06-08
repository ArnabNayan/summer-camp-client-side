import { useEffect, useState } from "react";
import HeadingTitle from "../HeadingTitle/HeadingTitle";

const PopularClass = () => {
    const [classes, setClasses] = useState([]);
    console.log(classes)

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {


                // if (data && data.classes && Array.isArray(data.classes)) {
                //     // Sort classes based on the number of students in descending order
                //     const sortedClasses = data.classes.sort((a, b) => b.students - a.students);

                //     // Get the top 6 classes
                //     const topClasses = sortedClasses.slice(0, 6);
                //     console.log(topClasses)
                //     setClasses(topClasses);
                //   }
                // })
                // .catch(error => {
                //   console.error('Error fetching classes:', error);
                // });
                if (data && Array.isArray(data)) {

                    const sortedClasses = data.sort((a, b) => b.students - a.students);
                    const topClasses = sortedClasses.slice(0, 6);
                    setClasses(topClasses);
                }
            })
            .catch(error => {
                console.error('Error fetching classes:', error);
            });

    }, [])
    return (
        <section>
            <HeadingTitle heading='Popular Classes'>
            </HeadingTitle>
            {/* {classes && classes.length > 0 ? ( */}
           <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-8">
           {
                classes.map((classItem, index) => (
                    //   <div key={index}>
                    //     <h3>{classItem.class_name}</h3>
                    //     <p>{classItem.description}</p>
                    //     <img src={classItem.image_url} alt={classItem.class_name} />
                    //   </div>
                    <div key={index} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full" src={classItem.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-serif card-title">{classItem.class_name} Academy</h2>
                         
                           <p className="font-semibold">Total Students:{classItem.students}</p>
                        </div>
                    </div>
                ))}
     
           </div>
        </section>
    );
};

export default PopularClass;