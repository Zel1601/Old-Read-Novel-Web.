import React, { useState } from 'react';
import './Css/Header.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); // Gọi hàm tìm kiếm mỗi khi người dùng nhập
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Gọi hàm tìm kiếm khi người dùng nhấn Enter
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Find..."
      />
      <button type="submit">Search</button>

      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </form>
  );
};

export default SearchBar;
