import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data);
        })
    },[])
    return (
        <div>
            <h2 className="text-5xl text-center text-blue-800 font-bold mb-5">Our Services</h2>
            <p className="text-center mb-8 font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium esse non corrupti numquam optio <br /> nisi minus harum dignissimos illum molestiae!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;