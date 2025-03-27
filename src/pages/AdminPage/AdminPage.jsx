import React, { useState } from 'react';
import {
    FileOutlined,
    DesktopOutlined,
    IdcardTwoTone,
    UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu } from 'antd';
import FilmManager from './FilmManager';
import UserManager from './UserManager';
import ShowTimeManager from './ShowTimeManager';
import AddFilm from './AddFilm';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../LoginPage/redux/userSlice';
import { Navigate } from 'react-router';

const { Header, Sider, Content } = Layout;

const AdminPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState('user');
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser());
        Navigate('/login');
    }
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const handleMenuClick = ({ key }) => {
        setSelectedKey(key);
    };

    const renderContent = () => {
        switch (selectedKey) {
            case 'user':
                return <UserManager />;
            case 'films':
                return <FilmManager />;
            case 'add_film':
                return <AddFilm />;
            case 'showtime':
                return <ShowTimeManager />;
            default:
                return <div>Chọn một mục từ menu</div>;
        }
    };

    const menuItems = [
        { key: 'user', icon: <UserOutlined />, label: 'Users' },
        {
            key: 'film',
            icon: <FileOutlined />,
            label: 'Films',
            children: [
                { key: 'films', label: 'Danh sách phim' },
                { key: 'add_film', label: 'Thêm phim' },
            ],
        },
        { key: 'showtime', icon: <DesktopOutlined />, label: 'Showtime' },
    ];

    const userMenu = (
        <Menu>
            <Menu.Item key="logout">
                <a href="/logout" className="text-red-500 font-medium">Đăng xuất</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout className="min-h-screen h-full">
            <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed} className="bg-[#001529] h-screen">
                <div className="text-white text-xl font-bold text-center py-4">
                    <IdcardTwoTone /> CYBERLEARN
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    onClick={handleMenuClick}
                    items={menuItems}
                />
            </Sider>

            <Layout className="bg-gray-100 flex-1">
                <Header className="bg-white flex justify-end items-center p-4 shadow-md">
                    <div className="flex items-center">
                        <Avatar size="large" className="bg-red-300 text-black font-bold">A</Avatar>
                        <button onClick={handleLogout} className="ml-2 rounded text-blue-600 font-medium cursor-pointer ">Đăng xuất</button>
                    </div>
                </Header>

                <Content className="p-6 bg-white shadow-md min-h-screen">
                    {renderContent()}
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminPage;
