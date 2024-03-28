import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import './RoomDetails.css'

import Navigationbar from '../components/Navbar';


function RoomDetails(){

    const {_id } = useParams();

    const [roomDetails, setRoomDetails] = useState(null);
   
    

useEffect(() => {
  const fetchRoomDetails = async () => {
    try {
      const response = await fetch(`http://localhost:4000/room/roomById/${_id}`); // Assuming backend endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch room details');
      }
      const room = await response.json();
      setRoomDetails(room);
    } catch (error) {
      console.error('Error fetching room details:', error);
    }
  };

  fetchRoomDetails();
}, [_id]);



    return(
        <div>
    {roomDetails ? (
      <>
      <Navigationbar/>
      
      <div class="room-details">
      <div className='room-image '>
      <img src={roomDetails.imageUrl} ></img>
      </div>
    <div className='room-details-info'>
        <p>Room Name: {roomDetails.roomName}</p> 
        <p>Capacity: {roomDetails.capacity}</p>
        <p>Equipment: {roomDetails.equipment}</p>
        <button>Book Now</button>
        </div>
        </div>
      </>
    ) : (
      <p>Loading room details...</p>
    )}
  </div>
  





    )

}
export default RoomDetails;

