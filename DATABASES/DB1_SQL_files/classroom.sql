CREATE DATABASE youtube1;
USE youtube1;
CREATE TABLE student(
  rollno INT primary key,
  name varchar(50),
  marks int not null,
  grade int default 0,
  city varchar(20),
  constraint check (rollno>0)
);

insert into student
(rollno, name , marks, grade, city) values
(101, "tharun", 78, 2, "hyd"),
(102, "tharu", 7, 2, "hyd"),
(103, "thar", 8, 1, "hyd"),
(104, "tha", 77, 2 , "hyd"),
(105, "th", 76, 3 , "hyd");

select name, marks,rollno from student;
select * from student;
select distinct grade from student;
select name, marks,rollno from student where marks>9 and marks<80;
select * 
from student 
where grade = 2;
select * from student limit 3;
select * from student order by rollno desc;
select marks from student;
select max(marks) from student;
select min(marks) from student;
select avg(marks) from student;

SET SQL_SAFE_UPDATES = 0;
 
UPDATE student
set city = "suryapet"
where rollno = 102 or rollno = 103;

update student
set marks= marks+1;
 
delete from student 
where grade<=1;

create table dept(
 id int primary key,
 name varchar(50)
);
-- parent table-- 

create table teacher(
 id int primary key,
 name varchar(50),
 dept_id int,
 foreign key (dept_id) references dept(id)
 on delete cascade
 on update cascade
);
-- child table-- 
insert into dept 
values
(101,"cse"),
(102,"ece"),
(103,"civil");

insert into teacher 
values
(101,"geerish",101),
(102,"karthik",102);

-- insert into teacher
-- values
-- (103,"hima",103);


select * from dept;
select * from teacher;

drop table teacher;

update dept
set id = 105
where name = "cse";

alter table student
add column age int not null default 18;

alter table student
modify age varchar(50);

alter table student
change age stu_age int;

alter table student 
drop column stu_age;

alter table student
rename to stu;

select * from student;
alter table stu
rename to student;

truncate table student;

alter table student
change name stu_name varchar(50);

delete from student
where marks < 70 ;

create table course(
 id1 int primary key,
 coursename varchar(50)
 );
 
create table stu(
 id2 int primary key,
 stuname varchar(50)
 );
 
insert into course
values
(101,"dsa"),
(102,"dld"),
(103,"daa");

insert into stu
values
(101,"tharun"),
(104,"harhsa"),
(103,"daa");

select *
from stu as s
inner join course as c
on s.id2 = c.id1;

select *
from stu as s
left join course as c
on s.id2 = c.id1;

select *
from stu as s
right join course as c
on s.id2 = c.id1;

select *
from stu as s
left join course as c
on s.id2 = c.id1
union
select *
from stu as s
right join course as c
on s.id2 = c.id1;

select *
from stu as s
left join course as c
on s.id2 = c.id1
where c.id1 is null;

select *
from stu as s
right join course as c
on s.id2 = c.id1
where s.id2 is null;

select *
from stu as s
left join course as c
on s.id2 = c.id1
union
select *
from stu as s
right join course as c
on s.id2 = c.id1
where s.id2 is null and c.id1 is null;

create table employee(
 id int not null,
 name varchar(50),
 mang_id int
);

insert into employee
values
(101,"thARUN",NULL),
(102,"HARSHA",101),
(103,"nithesh",102),
(104,"chirag",101);

select * from employee;

select * 
from employee as a 
join employee as b
on a.id = b.mang_id;

select a.name as manger_name ,b.name 
from employee as a 
join employee as b
on a.id = b.mang_id;

select name from employee
union
select name from employee;

select name from employee
union all
select name from employee;

select avg(marks)
from student;

select rollno, marks
from student 
where marks > 77.77;

select rollno, marks
from student 
where marks > (select avg(marks) from student);

SELECT 
    stu_name
FROM
    student
WHERE
    rollno IN (SELECT 
            rollno
        FROM
            student
        WHERE
            rollno % 2 != 0);

select * from student;

select max(marks)
from (select * from student where city = "hyd") as temp;

select (select max(grade) from student ),stu_name
from student;

create view view1 as
select rollno,stu_name from student;

select* from view1;