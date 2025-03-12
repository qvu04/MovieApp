import React, { useEffect, useState } from 'react'
import { getMovieList } from '../../api/movieService'
import { Carousel } from 'antd';
import { Link } from 'react-router';
export default function MovieList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        getMovieList()
            .then((result) => {
                setList(result.data.content);
            }).catch((err) => {
                console.log('✌️err --->', err);

            });
    }, [])
    return (
        <div className="px-5 py-5">
            <div className='w-36 mb-5'>
                <h2 className="relative group border-b-2 border-b-orange-500 text-orange-400 font-bold ">showing MOVIES</h2>
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 "></span>
            </div>
            <Carousel arrows infinite={false} slidesToShow={4} slidesToScroll={4}>
                {list.map((item, index) => (
                    <div key={index} className="  h-full p-4 rounded-lg shadow-lg text-white">
                        <Link to={`/detail/${item.maPhim}`}>
                            <img
                                src={item.hinhAnh}
                                alt={item.tenPhim}
                                className="w-full h-96 object-cover rounded-lg relative"
                            />
                        </Link>
                        <p className="absolute top-2  text-yellow-400 text-lg font-semibold mt-2">⭐ {item.danhGia}</p>
                        <h1 className="text-xl font-bold mt-2 text-center">{item.tenPhim}</h1>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
