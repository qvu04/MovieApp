import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { Link as ScrollLink } from 'react-scroll';
import { logoutUser } from '../../pages/LoginPage/redux/userSlice';
export default function Header() {
    const { user } = useSelector((state) => state.userSlice);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser());
        window.location.reload();
    };
    return (
        <div className="w-full h-20 flex items-center bg-gradient-to-b from-black to-transparent p-10  ">
            <div>
                <h1 className="text-3xl font-bold text-white uppercase tracking-wider">
                    <span className="text-orange-500 hover:text-yellow-400 transition duration-300">M</span>ovie
                    <span className="relative inline-block">
                        <span className="absolute inset-0 flex items-center justify-center w-7 h-7 border-2 border-orange-500 rounded-full text-orange-500">
                            IN
                        </span>
                        <span className="invisible">IN</span>
                    </span>
                    Hands
                </h1>
            </div>
            <nav className="flex-1 flex justify-center space-x-10 text-white font-semibold">
                <Link to="/" className="relative group">
                    HOME
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <ScrollLink to="movie-list" smooth={true} duration={500} className="relative group cursor-pointer">
                    SHOWING MOVIE
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
                <ScrollLink to="showing-movie" smooth={true} duration={500} className="relative group cursor-pointer">
                    SHOWTIME MOVIE
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
                {user?.maLoaiNguoiDung === "admin" && <Link to="/admin" className="relative group text-yellow-400">ADMIN DASHBOARD</Link>}
            </nav>
            <div className='space-x-5 text-white font-semibold'>
                {user ? (
                    <div className="flex items-center gap-4">
                        <span className="font-semibold text-white">{user.taiKhoan}</span>
                        <div className='flex items-center justify-center'>
                            <i class="fa-solid fa-user"></i>
                            <span className='text-xl text-white ml-3'>{user.content.taiKhoan}</span>
                        </div>
                        <button onClick={handleLogout} className="bg-red-500 cursor-pointer hover:bg-red-700 px-4 py-2 rounded">
                            Đăng Xuất
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-4">
                        <Link to="/login" className=" bg-white text-black px-4 py-2 rounded">Login</Link>
                        <Link to="/register" className="bg-white text-black px-4 py-2 rounded">Register</Link>
                    </div>
                )}
            </div>

        </div>
    );
}
