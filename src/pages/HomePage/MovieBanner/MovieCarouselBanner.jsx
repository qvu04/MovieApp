import React, { useEffect, useState } from 'react'
import { getMovieCarouselBanner } from '../../../api/movieService'
import { Carousel } from 'antd';
export default function MovieCarouselBanner() {
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        getMovieCarouselBanner()
            .then((result) => {
                setBanner(result.data.content);

            }).catch((err) => {
                console.log('✌️err --->', err);

            });
    }, [])
    return (
        <div className='"w-full max-w-screen-lg mx-auto mt-5"'>
            <Carousel arrows infinite={false}>
                {banner.map((item, index) => (
                    <div key={index} className="relative">
                        <img
                            src={item.hinhAnh}
                            alt={`Banner ${index}`}
                            className="w-full h- object-cover rounded-lg shadow-lg"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
