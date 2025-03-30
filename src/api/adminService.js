import { https } from "./config"

export const getUserList = () => {
    https.get("/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
}
export const getFilmList = () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");

}
export const getInfoFilm = (id) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
};
export const addFilm = (data) => {
    return https.post("/api/QuanLyPhim/ThemPhimUploadHinh", data)
};
export const editFilm = (formData) => {
    return https.post("/QuanLyPhim/CapNhatPhimUpload", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
};