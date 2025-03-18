import React, { useEffect, useState } from 'react'
import { getMovieLogo } from '../../../api/movieService'
import { Link } from 'react-router';
export default function MovieLogo() {
    const [logo, setLogo] = useState([]);
    useEffect(() => {
        getMovieLogo()
            .then((result) => {
                setLogo(result.data.content);
            }).catch((err) => {
                console.log('✌️err --->', err);

            });
    }, [])
    return (
        <div className="p-6">
            <div className='w-36 mb-5'>
                <h2 className="relative group border-b-2 border-b-orange-500 text-orange-400 font-bold ">showtime MOVIES</h2>
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 "></span>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex ">
                <div className="w-1/4 flex flex-col justify-center items-center hover:border-r-blue-400 border-r-2 border-gray-200">
                    {logo.map((item, index) => (
                        <Link key={index} to={`/movie/${item.maHeThongRap}`} className="mb-4 hover:scale-110  transition">
                            <img className="w-20 h-20  " src={item.logo} alt={item.maHeThongRap} />
                        </Link>
                    ))}
                </div>
                <div className="w-3/4 p-4">
                    {logo.map((item, index) => (
                        <div key={index} className="max-h-28 overflow-y-auto space-y-4 pr-2">
                            {item.lstCumRap.map((rap, i) => (
                                <div key={i} className="bg-gray-800 p-3 rounded-lg shadow-md flex items-center space-x-4">
                                    <img className="w-20 h-20 object-cover rounded-lg cursor-pointer" src={rap.hinhAnh} alt={rap.tenCumRap} />
                                    <div>
                                        <p className="text-white font-semibold">{rap.tenCumRap}</p>
                                        <p className="text-gray-300 text-sm">{rap.diaChi}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
