import { useState } from 'react';
import ArtistView from './components/artistView'; // Ensure the correct path
import NavButtons from './components/NavButtons'; // Ensure the correct path

function App() {
    let [search, setSearch] = useState('');
    let [message, setMessage] = useState('Search for Music!');
    let [data, setData] = useState([]);

    const handleSearch = (e, term) => {
        e.preventDefault();
        setSearch(term);
        // Add logic to fetch data from API and update the data state
    };

    return (
        <div>
            <NavButtons handleSearch={handleSearch} message={message} />
            <ArtistView handleSearch={handleSearch} message={message} />
            {/* 
            <DataContext.Provider value={data}>
                <Gallery />
            </DataContext.Provider> 
            */}
        </div>
    );
}

export default App;
