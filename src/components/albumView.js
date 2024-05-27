import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import SearchBar from './components/SearchBar'

function AlbumView() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])
    
    useEffect(() => {
        const API_URL = `http://localhost:4000/songs/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })

    const navButtons = ({ handleSearch, message }) => {
        //const navigate = useNavigate();
        
        return (
            <div>
                <div>
                    <SearchBar handleSearch={handleSearch} />
                    {message}
                </div>
                <div>
                    <button onClick={() => navigate(-1)}>Back</button>
                    |
                    <button onClick={() => navigate('/')}>Home</button>
                </div>
            </div>
        );
    };

    return (
        <div>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>}
            {navButtons()}
            {renderAlbums}
        </div>
    )
}

export default AlbumView
