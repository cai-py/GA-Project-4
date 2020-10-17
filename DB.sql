-- DATABASE NAME: ga_project_4
CREATE TABLE 
    posts ( 
        id serial, 
        name varchar(50), 
        title varchar(100), 
        image varchar(500), 
        votes int, 
        comments varchar(1000) 
    )
;

INSERT INTO 
    posts ( name, title, image )
VALUES
    ('John Doe', 'Dogs are better than cats', 'https://santansun.com/wp-content/uploads/2018/11/5b7fdeab1900001d035028dc.jpeg'),
    ('Jane Doe', 'Cats are better than dogs', 'https://www.bluevalleyanimalhospital.net/blog/wp-content/uploads/2019/08/iStock-495910314.jpg')
;