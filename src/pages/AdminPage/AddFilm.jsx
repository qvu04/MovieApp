import React from "react";
import { Form, Input, Button, DatePicker, Upload, Switch, InputNumber, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { addFilm } from "../../api/adminService";
import toast from "react-hot-toast";

const AddFilm = () => {
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        const formData = new FormData();
        formData.append("tenPhim", values.tenPhim);
        formData.append("trailer", values.trailer);
        formData.append("moTa", values.moTa);
        formData.append("maNhom", "GP01");
        formData.append("ngayKhoiChieu", values.ngayKhoiChieu.format("DD-MM-YYYY"));
        formData.append("sapChieu", values.sapChieu ? "true" : "false");
        formData.append("dangChieu", values.dangChieu ? "true" : "false");
        formData.append("hot", values.hot ? "true" : "false");
        formData.append("danhGia", values.danhGia.toString());

        // ✅ Kiểm tra và lấy file hình ảnh từ Upload
        if (values.hinhAnh && values.hinhAnh.length > 0) {
            const file = values.hinhAnh[0]?.originFileObj;
            if (file) {
                formData.append("hinhAnh", file);
            } else {
                toast.error("Vui lòng chọn lại ảnh!");
                return;
            }
        } else {
            toast.error("Vui lòng chọn hình ảnh!");
            return;
        }

        console.log("FormData:", [...formData.entries()]);

        try {
            const res = await addFilm(formData);
            console.log('✌️ Response:', res);
            toast.success("Thêm phim thành công!");
            form.resetFields();
        } catch (error) {
            if (error.response) {
                console.log("Lỗi từ server:", error.response.data);
            }
            toast.error("Lỗi khi thêm phim!");
        }
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            style={{ maxWidth: 600, margin: "auto" }}
        >
            <h1 className="text-center text-2xl">Add Film</h1>
            <Form.Item label="Tên phim" name="tenPhim" rules={[{ required: true, message: "Vui lòng nhập tên phim" }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Trailer" name="trailer">
                <Input />
            </Form.Item>

            <Form.Item label="Mô tả" name="moTa">
                <Input.TextArea rows={3} />
            </Form.Item>

            <Form.Item label="Ngày khởi chiếu" name="ngayKhoiChieu" rules={[{ required: true, message: "Vui lòng chọn ngày khởi chiếu" }]}>
                <DatePicker format="DD-MM-YYYY" />
            </Form.Item>

            <Form.Item label="Sắp chiếu" name="sapChieu" valuePropName="checked">
                <Switch />
            </Form.Item>

            <Form.Item label="Đang chiếu" name="dangChieu" valuePropName="checked">
                <Switch />
            </Form.Item>

            <Form.Item label="Hot" name="hot" valuePropName="checked">
                <Switch />
            </Form.Item>

            <Form.Item label="Đánh giá" name="danhGia">
                <InputNumber min={1} max={10} />
            </Form.Item>

            {/* ✅ Fix: Dùng đúng valuePropName="fileList" */}
            <Form.Item
                label="Hình ảnh"
                name="hinhAnh"
                valuePropName="fileList"
                getValueFromEvent={(e) => e?.fileList || []}
                rules={[{ required: true, message: "Vui lòng chọn hình ảnh" }]}
            >
                <Upload maxCount={1} listType="picture-card" beforeUpload={() => false}>
                    <button type="button">
                        <PlusOutlined />
                        <div>Upload</div>
                    </button>
                </Upload>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Thêm phim
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddFilm;
