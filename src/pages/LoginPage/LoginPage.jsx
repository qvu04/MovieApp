import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api/loginService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setUser } from "./redux/userSlice";
const { Text } = Typography;

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (values) => {
        console.log("✌️Dữ liệu gửi đi --->", values);

        try {
            const response = await loginUser(values);
            console.log("✌️Dữ liệu trả về từ server --->", response.data);
            dispatch(setUser(response.data)); // Lưu user vào Redux
            toast.success("Đăng nhập thành công!");
            navigate("/");
        } catch (error) {
            toast.error(error.response?.data || "Đăng nhập thất bại!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <div className="text-center text-3xl font-bold text-blue-600">
                    Đăng Nhập
                </div>

                <Form layout="vertical" onFinish={handleLogin}>
                    <Form.Item label="Tên đăng nhập" name="taiKhoan" rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}>
                        <Input prefix={<UserOutlined />} placeholder="Nhập tên đăng nhập" size="large" />
                    </Form.Item>

                    <Form.Item label="Mật khẩu" name="matKhau" rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}>
                        <Input.Password prefix={<LockOutlined />} placeholder="Nhập mật khẩu" size="large" />
                    </Form.Item>

                    <Form.Item>
                        <div className="flex justify-between items-center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                            </Form.Item>
                            <a href="#" className="text-blue-500 hover:underline">Quên mật khẩu?</a>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit" size="large" className="bg-blue-600 hover:bg-blue-700">
                            Đăng Nhập
                        </Button>
                        <div className="text-center mt-4">
                            <Text>Bạn chưa có tài khoản?</Text>{" "}
                            <a href="/register" className="text-blue-500 hover:underline">Đăng ký ngay!</a>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
