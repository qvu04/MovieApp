import React, { useEffect, useState } from "react";
import { getMovieList } from "../../../api/movieService";
import { Carousel } from "antd";
import { Link } from "react-router";

export default function MovieList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getMovieList()
            .then((result) => {
                setList(result.data.content);
            })
            .catch((err) => {
                console.log("✌️ API Error --->", err);
            });
    }, []);

    return (
        <div className="px-5 py-5 bg-gray-900 text-white">
            <div className="mb-5 relative w-40 border-b-2 border-orange-500">
                <h2 className="text-orange-400 font-bold  tracking-wide">showing MOVIES</h2>
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300"></span>
            </div>
            <Carousel arrows infinite={false} slidesToShow={4} slidesToScroll={4}>
                {list.map((item, index) => (
                    <div
                        key={index}
                        className="relative group p-4 rounded-xl shadow-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                    >
                        <div className="relative overflow-hidden rounded-xl">
                            <Link to={`/detail/${item.maPhim}`} className="block">
                                <img
                                    src={item.hinhAnh}
                                    alt={item.tenPhim}
                                    className="w-full h-96 object-cover rounded-xl transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                                />
                            </Link>
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <Link
                                    to={`/detail/${item.maPhim}`}
                                    className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold shadow-md hover:bg-orange-600 transition-all duration-200"
                                >
                                    🎟 Xem Chi Tiết
                                </Link>
                            </div>
                        </div>
                        <p className="absolute top-2 left-2 bg-yellow-500 text-white text-sm font-semibold px-2 py-1 rounded-md">
                            ⭐ {item.danhGia}
                        </p>

                        {/* Tên phim */}
                        <h1 className="text-lg font-bold mt-3 text-center">{item.tenPhim}</h1>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
