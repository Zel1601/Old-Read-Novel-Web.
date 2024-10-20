// Coin.js
import React, { useState } from "react";
import './Css/Coin.css';

const Coin = ({ user, setUser }) => {
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/deposit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: user.id, amount: parseInt(amount) })
      });

      const data = await response.json();

      if (response.ok) {
        // Cập nhật số coin của người dùng
        setUser({ ...user, coin: data.coin });
        alert('Nạp coin thành công');
      } else {
        alert('Nạp coin thất bại');
      }
    } catch (error) {
      console.error('Lỗi khi nạp coin:', error);
      alert('Đã xảy ra lỗi khi nạp coin');
    }
  };

  return (
    <div className="deposit-coin-form">
      <h2>Nạp Coin</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Số tiền (VND):
          <input 
            type="number" 
            value={amount} 
            onChange={handleChange} 
            placeholder="Nhập số tiền muốn nạp" 
            required 
          />
        </label>
        <button type="submit">Nạp Coin</button>
      </form>
    </div>
  );
};

export default Coin;
