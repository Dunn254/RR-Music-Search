import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar'; // Adjust the import based on your project structure

const NavButtons = ({ handleSearch, message }) => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <SearchBar handleSearch={handleSearch} />
                <p>{message}</p>
            </div>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        </div>
    );
};

export default NavButtons;
