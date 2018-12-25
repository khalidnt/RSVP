DROP DATABASE IF EXISTS rsvplcious;
CREATE DATABASE rsvplcious;
\c rsvplcious

CREATE TABLE guests(
    id serial primary Key,
    name varchar,
    email varchar
    
);

CREATE TABLE events(
    id serial primary key,
    title varchar,
    location varchar, 
    date DATE,
    start_time TIME,
    end_time TIME, 
    max_ int
);
CREATE TABLE event_guest(
    guest_id int NOT NULL, 
    event_id int NOT NULL,
    foreign key(guest_id) references guests,
    foreign key(event_id) references events
);



INSERT INTO guests(name, email) VALUES 
('khalid', 'khalid@khalid.com'),
('Jameel', 'jimi@gmail.com'),
('samman', 'sam4evah@hotmail.com');
INSERT INTO events(title, location, date) VALUES 
('Annual Day', 'lit club', '2018-12-30' ),
('Amro diab', 'diriah', '2018-12-25'),
('new years', 'comoros', '2018-12-31');

/*INSERT INTO event_guest(guest_id, event_id) VALUES (2, 1), (3, 2), (1,1); */
