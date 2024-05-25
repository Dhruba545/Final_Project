import SectionTitle from "../../Common/Section/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimoniasl = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading="What are clint say"
                heading="Testimonials"
            >

            </SectionTitle>
            <div className="my-12">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {reviews.map(review => <SwiperSlide key={review._id}>

                        <div className="text-center">
                            <p>{review.details}</p>
                            <h3 className="text-2xt text-orange-400">{review.name}</h3>
                            <Rating className="mx-auto"
                            style={{maxWidth: 180}}
                            value={review.rating}
                            readOnly/>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimoniasl;