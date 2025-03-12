import React from 'react'

export default function Footer() {
    return (
        <div className='mt-16 h-96 bg-[#0b1b28] pt-10 flex flex-col'>
            <div className='relative w-full h-20 flex justify-around flex-1 mt-6'>
                <div>
                    <div className='mb-16'>
                        <h1 className='text-3xl font-bold text-white uppercase tracking-wider'>
                            <span className='text-orange-500 hover:text-yellow-400 transition duration-300'>M</span>ovie
                            <span className='relative inline-block'>
                                <span className='absolute inset-0 flex items-center justify-center w-7 h-7 border-2 border-orange-500 rounded-full text-orange-500'>IN</span>
                                <span className='invisible'>IN</span>
                            </span>
                            Hands
                        </h1>
                    </div>
                    <div className='text-[#606d7e]'>
                        <p>197 Học Viện Công Nghệ Bưu Chính Viễn Thông <span>Quận 9, Thành Phố Hồ Chí Minh</span></p>
                        <p className='mt-5'>Call us: <span className='text-white text-xl'>(+84) 39 888 4505</span></p>
                    </div>

                </div>
                <div>
                    <div className='flex justify-around items-start w-96 h-64'>
                        <div>
                            <h1 className='text-white pb-5'>Chính Sách</h1>
                            <div className='text-[#606d7e] space-y-2'>
                                <p>Terms of use</p>
                                <p>Privacy Policy</p>
                                <p>Security</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-white pb-5'>Tài khoản</h1>
                            <div className='text-[#606d7e] space-y-2'>
                                <p>My Account</p>
                                <p>Watchlist</p>
                                <p>Collections</p>
                                <p>User Guide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-around px-10 py-5 border-t border-[#606d7e]'>
                <p className='text-[#606d7e]'>Ngô Quang Vũ</p>
                <button className='cursor-pointer text-blue-400 hover:text-blue-500 transition' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top<i class="fa fa-angle-double-up"></i></button>
            </div>
        </div>
    )
}
