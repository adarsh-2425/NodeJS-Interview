const express = require('express');
const app = express();

const port = process.env.port || 3000;

const availableSeats = 50;
const seats = Array(availableSeats).fill(true);

// Middleware to parse json requests
app.use(express.json());

// Route to reserve seats
app.post('/api/reserve', (req, res) => {
  let requestedSeats = req.body.seats;
         
  // Checking requested number of seats
  if (requestedSeats < 0 || requestedSeats > availableSeats) {
    return res.status(400).json({error: 'Invalid number of seats'})
  }

  // Initializing empty array for storing reserved seats
  const reservedSeats = [];

  // Reserving seats
  for(let i = 0; i < seats.length && requestedSeats > 0; i++) {
    if(seats[i]){
      seats[i] = false; //rserving seats
      reservedSeats.push(i + 1);
      requestedSeats--;
    }    
  }

  if(reservedSeats.length === 0) {
    return res.status(409).json({error: 'No seats available'})
  }

  res.status(200).json({message: 'Seat reserved successfully.', Seats: reservedSeats})
  
});

// Route to get available number of seats
app.get('/api/available-seats', (req, res) => {
  const availableCount = seats.filter(seat => seat).length;
  res.status(200).json({availableSeats: availableCount})
})

// Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
