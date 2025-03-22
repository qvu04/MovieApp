import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { registerUser } from "../../api/loginService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegisterPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (values) => {
        console.log("📩 Dữ liệu gửi đi:", values);
        setLoading(true);
        try {
            const response = await registerUser({
                taiKhoan: values.email.split("@")[0],
                matKhau: values.matKhau,
                email: values.email,
                soDt: "0123456789",
                maNhom: "GP01",
                hoTen: "Người dùng mới",
                maLoaiNguoiDung: "user" // Mặc định đăng ký là user
            });
            const admin = 

            console.log("✅ Đăng ký thành công:", response.data);
            toast.success("Đăng ký thành công!");
            if (response.data) {
                localStorage.setItem("user", JSON.stringify(response.data));
            } else {
                console.error("❌ Không có dữ liệu trả về từ API!");
            }

            navigate("/login");
        } catch (error) {
            console.error("❌ Lỗi đăng ký:", error.response?.data || error);
            toast.error(error.response?.data || "Đăng ký thất bại!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <div className="text-center text-3xl font-bold text-blue-600">
                    Đăng Ký
                </div>
                <Form layout="vertical" onFinish={handleRegister}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: "email", message: "Vui lòng nhập email hợp lệ!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="matKhau"
                        rules={[
                            { required: true, message: "Vui lòng nhập mật khẩu!" },
                            { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Xác nhận mật khẩu"
                        name="confirmPassword"
                        dependencies={["matKhau"]}
                        rules={[
                            { required: true, message: "Vui lòng nhập lại mật khẩu!" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("matKhau") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error("Mật khẩu không khớp!"));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    {/* Nút Đăng Ký */}
                    <Form.Item>
                        <Button
                            block
                            type="primary"
                            htmlType="submit"
                            size="large"
                            loading={loading}
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            Đăng Ký
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;
