import React, { useState } from "react";
import { Form, Input, Button, Select, message } from "antd";
import { registerUser } from "../../api/loginService";

const { Option } = Select;

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const handleRegister = async () => {
        try {
            await registerUser({ email, password, role });
            message.success("Đăng ký thành công!");
        } catch (error) {
            console.error("Lỗi đăng ký:", error);
            message.error("Đăng ký thất bại!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <div className="text-center text-3xl font-bold text-blue-600">
                    Đăng Ký
                </div>
                <Form layout="vertical" onFinish={handleRegister}>
                    <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Vui lòng nhập email hợp lệ!" }]}>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Item>

                    <Form.Item label="Mật khẩu" name="password" rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}>
                        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Item>

                    <Form.Item label="Vai trò" name="role">
                        <Select value={role} onChange={(value) => setRole(value)}>
                            <Option value="user">User</Option>
                            <Option value="admin">Admin</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit" size="large" className="bg-blue-600 hover:bg-blue-700">
                            Đăng Ký
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;
