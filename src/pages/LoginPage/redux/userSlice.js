import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
}
const admin_account = {
    tai_khoan: "admin",
    email: "admin@gmail.com",
    mat_khau: "admin",
    maLoaiNguoiDung: "admin",
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload;
            localStorage.setItem("user", JSON.stringify(payload));
            localStorage.setItem("token", payload.accessToken);
        },
        logoutUser: (state, { payload }) => {
            state.user = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
    }
});

export const { setUser, logoutUser } = userSlice.actions

export default userSlice.reducer