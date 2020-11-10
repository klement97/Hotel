-- CREATE DATABASE hotel;

CREATE TABLE rooms(
    room_id SERIAL PRIMARY KEY, 
    room_number INT UNIQUE,
    price MONEY,
    max_occupancy INT
);

CREATE TABLE reservations(
    reservation_id SERIAL PRIMARY KEY, 
    room_number INT REFERENCES rooms (room_number),
    check_in DATE,
    check_out DATE
);
