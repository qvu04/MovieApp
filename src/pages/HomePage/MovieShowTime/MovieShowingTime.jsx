import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';
import { getMovieShowingTime } from '../../../api/movieService';
export default function MovieShowingTime() {
    const { maHeThongRap } = useParams();
    const [showing, setShowing] = useState([]);
    useEffect(() => {
        getMovieShowingTime()
            .then((result) => {
                setShowing(result.data.content);
            }).catch((err) => {
                console.log('✌️err --->', err);

            });
    }, [maHeThongRap])
    const selectedCinema = showing.find((item) => item.maHeThongRap === maHeThongRap);
    return (
        <div className="p-4">
            {selectedCinema ? (
                <div className="bg-gray-800 p-6 rounded-md shadow-md">
                    <h3 className="text-2xl font-semibold text-yellow-400">{selectedCinema.tenHeThongRap}</h3>

                    {selectedCinema.lstCumRap?.map((rap, index) => (
                        <div key={index} className="p-4 mt-4 bg-gray-700 rounded-lg shadow-md">
                            <div className="flex items-center space-x-4 mb-4">
                                <img src={rap.hinhAnh} alt={rap.tenCumRap} className="w-20 h-20 rounded-lg" />
                                <div>
                                    <h4 className="text-white font-medium">{rap.tenCumRap}</h4>
                                    <p className="text-gray-300">{rap.diaChi}</p>
                                </div>
                            </div>

                            <div className="max-h-64 overflow-y-auto space-y-4 pr-2">
                                {rap.danhSachPhim?.map((item, index) => (
                                    <div key={index} className="bg-gray-800 p-3 rounded-lg shadow-md">
                                        <div className="flex items-center space-x-4">
                                            <img className="w-20 h-20 object-cover rounded-lg cursor-pointer" src={item.hinhAnh} alt={item.tenPhim} />
                                            <div>
                                                <h2 className="text-white font-semibold">{item.tenPhim}</h2>
                                                <p className="text-gray-300 text-sm">{item.moTa ? item.moTa.slice(0, 80) + "..." : "Không có mô tả"}</p>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="text-white text-lg font-semibold">Suất chiếu:</h3>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {item.lstLichChieuTheoPhim?.map((lich, index) => (
                                                    <Link key={index} to={`/selectedTicket/${lich.maLichChieu}`} className="text-green-400 font-bold bg-gray-900 px-3 py-1 rounded-md text-sm">
                                                        {new Date(lich.ngayChieuGioChieu).toLocaleDateString()} - {new Date(lich.ngayChieuGioChieu).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 text-center "></p>
            )}
        </div>
    );
}
