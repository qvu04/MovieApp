import React from 'react'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
export default function TemPlate({ content }) {
    return (
        <div
            style={{
                minHeight: "100vh",
            }}
            className='space-y-10 flex flex-col'>
            <Header />
            <div className='grow' >
                {content}
            </div>
            <Footer />
        </div>
    )
}
