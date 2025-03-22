import { https } from "./config"

export const registerUser = (data) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", data);
}
export const loginUser = (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
}