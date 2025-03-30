import React, { useEffect, useState, useMemo } from 'react';
import { getFilmList } from '../../api/adminService';
import { Link } from 'react-router';
import EditFilm from './EditFilm';
import { Modal } from 'antd';

export default function FilmManager() {
    const [film, setFilm] = useState([]);
    const [isModal, setIsModal] = useState(false);
    useEffect(() => {
        getFilmList()
            .then((result) => {
                setFilm(result.data.content);
            })
            .catch((err) => {
                console.log('✌️err --->', err);
            });
    }, [])
    const memorizedModal = useMemo(() => <EditFilm />, []);
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-3xl font-bold text-gray-700">🎬 Quản lý Phim</h1>
                <Link to='/add_film' className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md">
                    ➕ Thêm phim
                </Link>
            </div>
            <input
                type="text"
                placeholder="🔍 Tìm kiếm phim..."
                className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            />
            <div className="overflow-x-auto mt-5">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="border px-4 py-3 text-left">Mã phim</th>
                            <th className="border px-4 py-3">Hình ảnh</th>
                            <th className="border px-4 py-3 text-left">Tên phim</th>
                            <th className="border px-4 py-3 text-left">Mô tả</th>
                            <th className="border px-4 py-3">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {film.length > 0 ? (
                            film.map((film) => (
                                <tr key={film.id} className="hover:bg-gray-100 transition-all">
                                    <td className="border px-4 py-3">{film.maPhim}</td>
                                    <td className="border px-4 py-3 flex justify-center">
                                        <img
                                            src={film.hinhAnh}
                                            alt={film.tenPhim}
                                            className="w-14 h-14 rounded-md object-cover shadow-md"
                                        />
                                    </td>
                                    <td className="border px-4 py-3 font-semibold text-gray-700">{film.tenPhim}</td>
                                    <td className="border px-4 py-3 text-gray-600 truncate max-w-xs">{film.moTa}</td>
                                    <td className="border px-4 py-3 flex justify-center space-x-2">
                                        <button onClick={() => {
                                            setIsModal(true);

                                        }} className=" cursor-pointer text-blue-600 hover:text-blue-800">
                                            ✏️
                                        </button>
                                        <Modal
                                            open={isModal}
                                            destroyOnClose={false}
                                            onCancel={() => setIsModal(false)}
                                            footer={null}>
                                            <EditFilm />
                                        </Modal>
                                        <button className="text-red-600 hover:text-red-800">
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center text-gray-500 py-5">
                                    🚫 Không có phim nào
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
