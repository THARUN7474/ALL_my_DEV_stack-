create database college;
-- create database if not exists college;
-- drop database if exists tahrun;
use college;
-- CREATE TABLE student(
--    id INT PRIMARY KEY,
--    name varchar(50),
--    age int not null
-- );
-- insert into student values(1,"tharun",18);
-- insert into student values(2,"harsha",18);
-- select * from student;
-- show tables;
-- show databases;
-- drop table student;

create table student(
 id int primary key,
 name varchar(100),
 section varchar(100),
 rollno int not null
);
insert into student 
(id,name,section,rollno) 
values 
(1,"tharun","A",422116),
(2,"harsha","B",422157);

insert into student values(3,"bruhath","A",322201);
-- select& view all coloumns 
select * from student;



