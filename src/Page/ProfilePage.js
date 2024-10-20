import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Css/ProfilePage.css';

const ProfilePage = ({ user }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user && user.id) {
      fetchUserData(user.id);
    }
  }, [user]);

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/users/${userId}`);
      if (!response.ok) {
        throw new Error('Lỗi khi lấy thông tin người dùng');
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Lỗi khi lấy thông tin người dùng:", error);
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h2>Thông tin cá nhân</h2>
      <p><strong>Tên người dùng:</strong> {userData.name}</p>
      <p><strong>Mật khẩu:</strong> {userData.password}</p>
      <p><strong>Số điện thoại:</strong> {userData.phone || "Chưa cập nhật"}</p>
      <p><strong>Email:</strong> {userData.email || "Chưa cập nhật"}</p>
      <p><strong>Địa chỉ:</strong> {userData.address || "Chưa cập nhật"}</p>
      <button >
        <Link style={{color:"black"}} to="/edit">Cập nhật thông tin</Link>
      </button>
    </div>
  );
};

export default ProfilePage;
