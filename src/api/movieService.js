import { useParams } from "react-router";
import { https } from "./config"

export const getMovieCarouselBanner = () => {
    return https.get("/api/QuanLyPhim/LayDanhSachBanner");

}
export const getMovieList = () => {
    return https.get("api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");

}
export const getMovieLogo = () => {
    return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01");

}
export const getMovieShowingTime = () => {
    return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
}
export const getMovieDetail = (detailRoom) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${detailRoom}`)

}
export const getMovieTicket = (maPhim) => {
    return https.get(`https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
}