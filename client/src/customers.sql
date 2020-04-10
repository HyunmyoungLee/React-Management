use management; 
CREATE TABLE customer(
 id INT PRIMARY KEY AUTO_INCREMENT,
 image varchar(1024),
 name varchar(64),
 birthday varchar(64),
 gender varchar(64),
 job varchar(64)
)default character set UTF8 collate utf8_general_ci;

insert into customer values(1, "https://placeimg.com/64/64/1", "Hyunmyoung Lee", "930902", "Male", "Student");
insert into customer values(2, "https://placeimg.com/64/64/2", "Nakyung Lee", "971212", "Female", "Student");
insert into customer values(3, "https://placeimg.com/64/64/3", "MyoungSuk Lee", "690616", "Female", "Adult");

SELECT * FROM customer;