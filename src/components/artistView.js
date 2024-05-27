import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
//import SearchBar from './SearchBar'; // Adjust the import based on your project structure
import NavButtons from './NavButtons'; // Ensure the correct path

function ArtistView({ handleSearch, message }) {
    //const navigate = useNavigate();
    const { id } = useParams();
    const [artistData, setArtistData] = useState([]);

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`;
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const resData = await response.json();
            setArtistData(resData.results);
        };
        fetchData();
    }, [id]);

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album');

    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={album.collectionId}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        );
    });

    return (
        <div>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>}
            <NavButtons handleSearch={handleSearch} message={message} />
            {renderAlbums}
        </div>
    );
}

export default ArtistView;
