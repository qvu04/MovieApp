import { https } from "./config"

export const getUserList = () => {
    https.get("/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
}
export const getFilmList = () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");

}
export const addFilm = (data) => {
    return https.post("/api/QuanLyPhim/ThemPhimUploadHinh", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};