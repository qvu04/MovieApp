import React, { useEffect, useState } from 'react'
import { getMovieDetail } from '../../api/movieService'
import { Link, useParams } from 'react-router';

export default function MovieDetail() {
    const [detail, setDetail] = useState({});
    const { detailRoom } = useParams();
    useEffect(() => {
        getMovieDetail(detailRoom)
            .then((result) => {
                setDetail(result.data.content);
            }).catch((err) => {
                console.log('✌️err --->', err);
            });
    }, [])
    return (
        <div className="relative bg-gray-900 text-white min-h-screen">

            <div
                className="absolute inset-0 bg-cover bg-center opacity-30 blur-md"
                style={{ backgroundImage: `url(${detail.hinhAnh})` }}
            ></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 p-6 lg:p-12">

                <div className="w-full lg:w-1/3 flex justify-center">
                    <img
                        src={detail.hinhAnh}
                        alt={detail.biDanh}
                        className="w-72 h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                    />
                </div>


                <div className="lg:w-2/3 bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-yellow-400 mb-2">{detail.tenPhim}</h1>
                    <p className="text-gray-300 italic text-sm">({detail.ngayKhoiChieu})</p>

                    <p className="mt-4 text-gray-200">{detail.moTa}</p>

                    <div className="mt-4 flex items-center space-x-2">
                        <span className="text-lg font-semibold text-green-400">Đánh giá:</span>
                        <span className="text-xl font-bold">{detail.danhGia}/10 ⭐</span>
                    </div>


                    <div className="space-x-5">
                        <Link
                            className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 cursor-pointer"
                            to={detail.trailer}
                        >
                            Xem trailer
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
