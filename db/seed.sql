DROP TABLE IF EXISTS rsvplcious;
CREATE DATABASE rsvplcious;
\c rsvplcious

CREATE TABLE members(
    id serial primary Key,
    name varchar,
    phone int(10),
    email varchar
)

CREATE TABLE events(
    id serial primary key,
    title varchar,
    location varchar, 
    date DATE,
    startTime TIME,
    endTime TIME
)

INSERT INTO members(id, name, phone, email) VALUES ()
INSERT INTO events(id, title, location, date, startTime, endTime) VALUES ()