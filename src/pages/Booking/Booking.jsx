import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
    const service = useLoaderData();
    const { _id,title,price,image} = service;
    const{user}=useContext(AuthContext);

    const handleBookService=event=>{
            event.preventDefault();
            const form=event.target;
            const name=form.name.value;
            const date=form.date.value;
            const email=user?.email;
            const booking={
                patientName: name,
                email,
                _id,
                image,
                date,
                service:title,
                price: price
            }
            console.log(booking);

            fetch('http://localhost:5000/bookings',{
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(booking)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    toast("Appointment book successfully!");
                }
            })
    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-blue-800 text-center">Booking title : {title}</h2>
            <div className="card-body w-2/3 mx-auto">
                <form onSubmit={handleBookService}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="date" name="date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Confirm" />
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Booking;