import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import AllBookingsRow from "./AllBookingsRow";

const AllBookings = () => {
    const { user } = useContext(AuthContext);
    const [allBookings, setAllBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [])

    const handleDelete=id=>{
        const proceed=confirm('are you sure you want to delete?');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    alert('deleted successfully');
                    const remaining=allBookings.filter(allBooking=>allBooking._id!==id);
                    setAllBookings(remaining);
                }
            })
        }
    }

    const handleConfirm=(id)=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                // update sate
                const remaining=allBookings.filter(allBooking=>allBooking._id!==id);
                const updated=allBookings.find(allBooking=>allBooking._id===id);
                updated.status='confirm';
                const newBookings=[updated, ...remaining];
                setAllBookings(newBookings);
            }
        })
    }
    return (
        <div>
            <h2>Your All Bookings:{allBookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Patient Name</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        allBookings.map(allBooking=><AllBookingsRow
                        key={allBooking._id}
                        allBooking={allBooking}
                        handleDelete={handleDelete}
                        handleConfirm={handleConfirm}
                        ></AllBookingsRow>)
                       }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllBookings;