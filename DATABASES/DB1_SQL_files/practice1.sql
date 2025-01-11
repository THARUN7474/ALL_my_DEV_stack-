create database practice1_comapany;
use practice1_comapany;
create table employee_xyz(
  id int primary key,
  name varchar(100),
  salary int not null
);

insert into employee_xyz
(id,name,salary)
values
(1,"e1",2000),
(2,"e2",3000),
(3,"e3",4000);

show tables;
select * from employee_xyz;
