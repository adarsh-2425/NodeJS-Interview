# Question:

Create a Node.js program that simulates a simple ticket booking system for a cinema. The program should allow multiple users to request tickets concurrently. Implement the following requirements:

- There are a limited number of available seats (e.g., 50 seats).

- Users can request a certain number of seats for a movie screening. If there are enough available seats, the program should reserve them for the user.

- Ensure that the reservation process is non-blocking, allowing multiple users to request tickets concurrently without blocking others.

- Implement a mechanism to handle scenarios where there are not enough available seats to fulfill a user's request.

- Provide feedback to users about the success or failure of their ticket requests.

## Requirements:

- Create a Node.js program that uses the event loop, asynchronous programming, and non-blocking I/O to simulate ticket reservations.

- Maintain a data structure (e.g., an array) to represent the available seats and their status (e.g., available or reserved).

- Implement routes or endpoints to handle ticket reservation requests from users.
