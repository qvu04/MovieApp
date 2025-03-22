import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, role }) => {
    const { user } = useSelector((state) => state.userSlice);

    if (!user) {
        return <Navigate to="/login" replace />; // Chuyển hướng về trang login nếu chưa đăng nhập
    }

    if (role && user.maLoaiNguoiDung !== role) {
        return <Navigate to="/" replace />; // Chặn truy cập nếu không đúng role
    }

    return children; // Nếu hợp lệ thì hiển thị trang
};

export default ProtectedRoute;
    