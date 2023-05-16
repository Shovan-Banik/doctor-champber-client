
const ServiceCard = ({ service }) => {
    const { _id, image, title, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-orange-500 font-bold">Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;