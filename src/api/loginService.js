import { https } from "./config"

export const registerUser = () => {
    return https.post("/api/QuanLyNguoiDung/DangKy");
}
export const loginUser = (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);

}