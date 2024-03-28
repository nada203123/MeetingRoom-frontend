import React, {useState , useEffect} from "react";
import Navigationbar from '../components/Navbar';
import CardC from '../components/Card';
import { useNavigate } from 'react-router-dom';
//import Pagination from '../components/Pagination';
import "./Home.css";

function Home(){

    const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4
  

    useEffect(() => {
        const fetchRooms = async () => {
          try {
            const response = await fetch('http://localhost:4000/room/allrooms'); // Assuming your backend endpoint is /api/allRooms
            if (!response.ok) {
              throw new Error('Failed to fetch rooms');
            }
            const RoomsData = await response.json();
            setRooms(RoomsData);
          } catch (error) {
            console.error('Error fetching rooms:', error);
          }
        };
    
        fetchRooms();
      }, []);
      
      const totalPages = Math.ceil(rooms.length / itemsPerPage);
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Fetch rooms for the new page (optional, if not pre-fetched)
      };
      const navigate = useNavigate();

const handleMoreDetails = (_id) => {
  navigate(`/roomD/${_id}`);
};

      const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const displayedRooms = rooms.slice(startIndex, endIndex);
     /* const totalPages = Math.ceil(rooms.length / roomsPerPage);
      const startIndex = (currentPage - 1) * roomsPerPage;
      const endIndex = startIndex +roomsPerPage;
      const currentRooms = rooms.slice(startIndex , endIndex);*/
//{Room.map(room => (
return(
    <>
    <Navigationbar/>
    <div className="card" >
    {displayedRooms.map(room => (
    <CardC key={room._id} room={room} handleMoreDetails={handleMoreDetails}/>
    ))}
    
    </div>
    {totalPages > 1 && (
      <div className="pagination">
        <a href="#" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</a>
        {Array.from({ length: totalPages }, (_, i) => (
          <a key={i + 1} href="#" onClick={() => handlePageChange(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
            {i + 1}
          </a>
        ))}
        <a href="#" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</a>
      </div>
    )}
    

    </>
)

}
export default Home;

