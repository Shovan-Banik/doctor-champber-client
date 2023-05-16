import Marquee from "react-fast-marquee";
const Banner = () => {
    return (
        <>
            <div className="my-12">
                <Marquee className="font-bold text-red-500">
                    We are committed to give you the best treatment as per your problem. Check your body and stay safe!!!
                </Marquee>
            </div>
            <div className="carousel carousel-end rounded-box h-96 my-12">
                <div className="carousel-item ">
                    <img src="https://i.postimg.cc/L5hW9Tj1/pic1.jpg" alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.postimg.cc/1zc2J49f/pic2.jpg" alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.postimg.cc/GhtRtPbz/pic3.jpg" alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.postimg.cc/0QGkG94f/pic4.jpg" alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.postimg.cc/rF3BpvnF/pic5.jpg" alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.postimg.cc/xC9D2Msv/pic6.jpg" alt="Drink" />
                </div>
            </div>
        </>
    );
};

export default Banner;