import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedRap: null,
    selectedShowTime: null,
    selectedSeats: [],
}

const ticketSlice = createSlice({
    name: "ticketSlice",
    initialState,
    reducers: {
        SelectedRapAction: (state, { payload }) => {
            state.selectedRap = payload;
            state.selectedShowTime = null;
            state.selectedSeats = [];
        },
        SelectedShowTimeAction: (state, { payload }) => {
            state.selectedShowTime = payload;
            state.selectedSeats = [];
        },
        SelectedSeatsAction: (state, { payload }) => {
            const seat = payload;
            if (state.selectedSeats.includes(seat)) {
                state.selectedSeats = state.selectedSeats.filter((item) => item != seat);
            } else {
                const newSeat = [...state.selectedSeats, seat];
                state.selectedSeats = newSeat;
            }
        },
    },
});

export const { SelectedRapAction, SelectedShowTimeAction, SelectedSeatsAction } = ticketSlice.actions

export default ticketSlice.reducer