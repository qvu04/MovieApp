import React from 'react'
import { useSelector } from 'react-redux'
import { RingLoader } from 'react-spinners'
export default function Loading() {
    const { isLoading } = useSelector((state) => state.loadingSlice);
    console.log('✌️isLoading --->', isLoading);
    return (
        isLoading ? (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "black",
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <RingLoader color='#1F7D53' size={100} speedMultiplier={1} />
            </div>
        ) : null
    )
}
