import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form, Input, Button, DatePicker, Upload, Switch, InputNumber, message
} from 'antd';
import { useNavigate, useParams } from 'react-router';
import { editFilm, getInfoFilm } from '../../api/adminService';
import toast from 'react-hot-toast';
import { getMovieDetail } from '../../api/movieService';
const EditFilm = () => {
    const [form] = Form.useForm();
    const { id } = useParams();
    const navigate = useNavigate();
    const [infoFilm, setInfoFilm] = useState(null);
    useEffect(() => {
        getInfoFilm(id)
            .then((result) => {
                const film = result.data.content;
                console.log('✌️film --->', film);
                setInfoFilm(film);
                form.setFieldValue({
                    maPhim: film.maPhim,
                    tenPhim: film.tenPhim,
                    moTa: film.moTa,
                    ngayKhoiChieu: moment(film.ngayKhoiChieu),
                    sapChieu: film.sapChieu,
                    dangChieu: film.dangChieu,
                    hot: film.hot,
                    danhGia: film.danhGia,
                    hinhAnh: film.hinhAnh ? [{ uid: "-1", url: film.hinhAnh }] : [],
                })
            }).catch((err) => {
                console.log('✌️err --->', err);

            });
    }, [id])
    const handleSubmit = () => {
        let formData = new FormData();
        formData.append("maPhim", values.maPhim);
        formData.append("tenPhim", values.tenPhim);
        formData.append("trailer", values.trailer);
        formData.append("moTa", values.moTa);
        formData.append("ngayKhoiChieu", values.ngayKhoiChieu.format("DD-MM-YYYY"));
        formData.append("sapChieu", values.sapChieu ? "true" : "false");
        formData.append("dangChieu", values.dangChieu ? "true" : "false");
        formData.append("hot", values.hot ? "true" : "false");
        formData.append("danhGia", values.danhGia);

        if (values.hinhAnh && values.hinhAnh[0]?.originFileObj) {
            formData.append("File", values.hinhAnh[0].originFileObj);
        }

        editFilm(formData)
            .then((result) => {
                toast.success("Cập nhật phim thành công!");
            }).catch((err) => {
                console.log('✌️err --->', err);
                toast.error("Cập nhật phim thất bại!");
            });
    }

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            style={{ maxWidth: 600, margin: "auto" }}
        >
            <h1 className="text-center text-2xl">Chỉnh sửa phim</h1>

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

            <Form.Item
                label="Hình ảnh"
                name="hinhAnh"
                valuePropName="fileList"
                getValueFromEvent={(e) => e?.fileList || []}
            >
                <Upload
                    maxCount={1}
                    listType="picture-card"
                    beforeUpload={() => false}
                    defaultFileList={infoFilm ? [{ uid: "-1", url: infoFilm.hinhAnh }] : []}
                >
                    <button type="button">
                        <PlusOutlined />
                        <div>Upload</div>
                    </button>
                </Upload>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Cập nhật phim
                </Button>
            </Form.Item>
        </Form>
    );
};
export default () => <EditFilm />;