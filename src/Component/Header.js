// Header.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import SearchBar from "./SearchBar";
import './Css/Header.css';

const Header = ({ user, setUser }) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách thể loại:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    // Logic tìm kiếm
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  const handleTopUp = () => {
    navigate("/coin");
  };

  const handleUsers = () => {
    navigate("/profile");
  };

  return (
    <ul className="header-menu">
      <li className="item">
        <Link to="/main">
          <img src={require('./image/Logo.jpg')} alt="Logo" />
        </Link>
      </li>
      <li className="item3">
        <Link to="/main" style={{ color: 'black', textDecoration: 'none' }}>Trang chủ</Link>
      </li>
      <li className="item3">
        <Link to="/AllNovel" style={{ color: 'black', textDecoration: 'none' }}>Tiểu thuyết</Link>
      </li>
      <li className="item">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Danh mục
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {categories.map((category) => (
              <Dropdown.Item key={category.id} onClick={() => handleCategoryClick(category.id)}>
                {category.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </li>
      <li className="item2">
        <SearchBar onSearch={handleSearch} />
      </li>
      <li className="item1">
        {user ? (
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Xin chào {user.name} ({user.coin} coin)
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleUsers}>Thông tin cá nhân</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
              <Dropdown.Item onClick={handleTopUp}>Nạp tiền</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Đăng nhập/Đăng ký</Link>
        )}
      </li>
      <li className="item">
        <Link to="/adminlogin" style={{ color: 'black', textDecoration: 'none' }}>Admin</Link>
      </li>
    </ul>
  );
};

export default Header;
