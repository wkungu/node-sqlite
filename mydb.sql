drop table if exists users;
drop table if exists products;

create table users(
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT
);

create table products(
    id INTEGER PRIMARY KEY,
    title TEXT,
    description TEXT,
    price INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users(first_name, last_name, email, phone) VALUES
('William', 'Kungu', 'wkungu@gmail.com', '0713015501'),
('Joy', 'Gaki', 'joy@gmail.com', '0713015501'),
('Helsa', 'Wendo', 'helsa@gmail.com', '0713015501'),
('Ariella', 'Imani', 'ariella@gmail.com', '0713015501'),
('Zani', 'Kungu', 'zani@gmail.com', '0713015501');

INSERT INTO products(title, description, price, user_id) VALUES
('Sample - 1', 'This is a sample description', 2000, 1),
('Sample - 2', 'This is a sample description', 30, 1),
('Sample - 3', 'This is a sample description', 10, 2),
('Sample - 4', 'This is a sample description', 50, 1),
('Sample - 5', 'This is a sample description', 1000, 3),
('Sample - 6', 'This is a sample description', 100, 4),
('Sample - 7', 'This is a sample description', 65, 5),
('Sample - 8', 'This is a sample description', 72, 2),
('Sample - 9', 'This is a sample description', 3000, 3),
('Sample - 10', 'This is a sample description', 683, 4);


