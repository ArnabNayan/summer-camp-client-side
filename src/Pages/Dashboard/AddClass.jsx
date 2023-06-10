import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import { useQuery } from "@tanstack/react-query";
const AddClass = () => {
    const [axiosSecure]=useAxiosSecure();
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const onSubmit = data => {
        const{classname,instructorname,price,availableseats,photo,email}=data;
        const newClass={classname,instructorname,availableseats,price:parseFloat(price),photo,email}
        axiosSecure.post('/instructorclass',newClass)
        .then(data=>{
            console.log('after posting new class',data.data);
            if(data.data.insertedId){
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        // console.log(data);
    }
    console.log(errors);
    return (
        <div className="w-full">
            <HeadingTitle heading='Add a Class'>
            </HeadingTitle>
            <div className="bg-[#F4F3F0] p-24">
       
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <label className="input-group">

                                <input type="classname" name="classname" placeholder="Class Name" 
                                {...register("classname", {required: true, maxLength: 80})}className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <label className="input-group">

                                <input type="quantity" name="quantity" placeholder="Available Seats" {...register("availableseats", {required: true})} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <label className="input-group">

                                <input type="name" name="name" placeholder="Instructor Name"{...register("instructorname", {required: true})} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <label className="input-group">

                                <input type="email" name="email" placeholder="Email"
                                {...register("email", {required: true})} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="number" name="price" placeholder="price"  
                                {...register("price", {required: true})}className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control  md:w-1/2">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <label className="input-group">

                                <input type="photo" name="photo" placeholder="Class Image" 
                                {...register("photo", {required: true})}className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Add Class" className="btn btn-block bg-pink-500 text-white" />
                </form>

            </div>

        </div>
    );
};

export default AddClass;