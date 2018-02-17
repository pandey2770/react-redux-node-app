DB setup:

- createuser myuser --password; // password: mypwd
- createdb myapp;
- psql myapp
- grant all privileges on database myapp to myuser;
- grant all privileges on tasks to myuser;



CREATE TABLE tasks (
  id uuid,
  des text,
  state text,
  FOREIGN KEY (id) REFERENCES usertable(id)
);

 CREATE TABLE usertable (
  id uuid PRIMARY KEY,
  name varchar,
  email text UNIQUE,
  password varchar
 );


insert into tasks(id, des, state) values(1, 'task 1', 'NEW');
