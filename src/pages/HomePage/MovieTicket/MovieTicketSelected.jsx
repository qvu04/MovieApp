import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieTicket } from "../../../api/movieService";
import { useDispatch, useSelector } from "react-redux";
import { SelectedRapAction, SelectedSeatsAction, SelectedShowTimeAction } from "./redux/ticketSlice";

export default function MovieTicketSelected() {
    const [movie, setMovie] = useState(null);
    const { maPhim } = useParams();
    const dispatch = useDispatch();
    const { selectedSeats, selectedShowTime, selectedRap } = useSelector((state) => state.ticketSlice);

    useEffect(() => {
        getMovieTicket(maPhim)
            .then((result) => {
                setMovie(result.data.content);
            })
            .catch((err) => {
                console.error("❌ API Error:", err);
            });
    }, [maPhim]);

    if (!movie) return <p className="text-center text-gray-500 text-xl mt-10">Loading movie details...</p>;

    const totalPrice = selectedSeats.length * (selectedShowTime?.giaVe || 0);

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 flex gap-6">
            <div className="w-1/3 flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-800 text-center">{movie.tenPhim}</h1>
                <img src={movie.hinhAnh} alt={movie.tenPhim} className="w-72 rounded-lg my-4 shadow-md" />
            </div>
            <div className="w-2/3">
                <h2 className="text-xl font-semibold mt-4 mb-2">🎬 Chọn Rạp</h2>
                <div className="flex gap-3 overflow-x-auto p-2">
                    {movie.heThongRapChieu?.map((heThongRap) =>
                        heThongRap.cumRapChieu.map((rap) => (
                            <button
                                key={rap.maCumRap}
                                className={`px-4 py-2 border rounded-lg transition-all duration-200 hover:scale-105 ${selectedRap === rap ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 hover:bg-gray-200"
                                    }`}
                                onClick={() => dispatch(SelectedRapAction(rap))}
                            >
                                {rap.tenCumRap}
                            </button>
                        ))
                    )}
                </div>
                {selectedRap && (
                    <>
                        <h2 className="text-xl font-semibold mt-6">⏰ Chọn Suất Chiếu</h2>
                        <div className="flex gap-3 overflow-x-auto p-2">
                            {selectedRap.lichChieuPhim.map((showtime) => (
                                <button
                                    key={showtime.maLichChieu}
                                    className={`px-4 py-2 border rounded-lg transition-all duration-200 hover:scale-105 ${selectedShowTime === showtime ? "bg-green-600 text-white shadow-lg" : "bg-gray-100 hover:bg-gray-200"
                                        }`}
                                    onClick={() => dispatch(SelectedShowTimeAction(showtime))}
                                >
                                    {new Date(showtime.ngayChieuGioChieu).toLocaleString()} - {showtime.giaVe.toLocaleString()}đ
                                </button>
                            ))}
                        </div>
                    </>
                )}
                {selectedShowTime && (
                    <>
                        <h2 className="text-xl font-semibold mt-6">🎟 Chọn Ghế</h2>
                        <div className="grid grid-cols-10 gap-3 p-4 bg-gray-100 rounded-lg shadow-md">
                            {Array.from({ length: 50 }, (_, i) => i + 1).map((seat) => (
                                <button
                                    key={seat}
                                    className={`w-10 h-10 flex items-center justify-center border rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-110 ${selectedSeats.includes(seat)
                                        ? "bg-red-600 text-white shadow-lg"
                                        : "bg-white hover:bg-gray-200"
                                        }`}
                                    onClick={() => dispatch(SelectedSeatsAction(seat))}
                                >
                                    {seat}
                                </button>
                            ))}
                        </div>
                    </>
                )}
                {selectedSeats.length > 0 && (
                    <div className="mt-6 p-6 bg-gray-200 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl font-bold text-gray-800">💰 Tổng Tiền: {totalPrice.toLocaleString()}đ</h2>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-200">
                            ✅ Đặt Vé Ngay
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
