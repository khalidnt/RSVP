DROP TABLE IF EXISTS rsvplcious;
CREATE DATABASE rsvplcious;
\c rsvplcious

CREATE TABLE guest(
    id serial primary Key,
    name varchar,
    email varchar,
    password_digest varchar
)

CREATE TABLE events(
    id serial primary key,
    title varchar,
    location varchar, 
    date DATE,
    start_time TIME,
    end_time TIME, 
    max_ int
)

INSERT INTO guest(id, name, email) VALUES ()
INSERT INTO events(id, title, location, date, start_time, end_time) VALUES ()