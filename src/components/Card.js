import React, {useState} from "react";
import "./Card.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function CardC({ room, handleMoreDetails }){

    

    return(
        <>
        <div>
        <Card sx={{ maxWidth: 900 }}>
          <CardMedia
            sx={{ height: 200}}
            image={room.imageUrl}
            title={room.roomName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {room.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               Name: {room.roomName} <br/>
               Capacity: {room.capacity} <br/>
               Equipment: {room.equipment}

            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" disabled={!room._id}   onClick={() => handleMoreDetails(room._id)}>More details</Button>
          </CardActions>
        </Card>
        </div>
        </>
    )
    
    }
    export default CardC;
    