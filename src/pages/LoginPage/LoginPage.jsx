import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { loginUser } from "../../api/loginService";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const { Title, Text } = Typography;

const LoginPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const handleLogin = async (values) => {
        setLoading(true);
        try {
            const response = await loginUser(values);
            localStorage.setItem("token", response.data.token);
            toast.success("Đăng nhập thành công!");

            if (response.data.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/home");
            }
        } catch (error) {
            toast.error("Sai tài khoản hoặc mật khẩu!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <div className="text-center text-3xl font-bold text-blue-600">
                    Đăng Nhập
                </div>

                <Form layout="vertical" onFinish={handleLogin}>
                    <Form.Item label="Tên đăng nhập" name="username" rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}>
                        <Input prefix={<UserOutlined />} placeholder="Nhập tên đăng nhập" size="large" />
                    </Form.Item>

                    <Form.Item label="Mật khẩu" name="password" rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}>
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
                        <Button block type="primary" htmlType="submit" size="large" loading={loading} className="bg-blue-600 hover:bg-blue-700">
                            Đăng Nhập
                        </Button>
                        <div className="text-center mt-4">
                            <Text>Bạn chưa có tài khoản?</Text>{" "}
                            <a href="/register" className="text-blue-500 hover:underline">
                                Đăng ký ngay!
                            </a>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
