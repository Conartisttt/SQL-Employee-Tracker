USE employees_db;

INSERT INTO department
VALUES (dept id INT, "dept name"),
       (dept id INT, "dept name"),
       (dept id INT, "dept name"),
       (dept id INT, "dept name"),
       (dept id INT, "dept name"),
       (dept id INT, "dept name"),,
       (dept id INT, "dept name");

INSERT INTO role
VALUES (role id INT, "title", salary decimal, dept id INT from table  above),
       (role id INT, "title", salary decimal, dept id INT from table above),
       (role id INT, "title", salary decimal, dept id INT from table above),
       (role id INT, "title", salary decimal, dept id INT from table above),
       (role id INT, "title", salary decimal, dept id INT from table above),
       (role id INT, "title", salary decimal, dept id INT from table above),
       (role id INT, "title", salary decimal, dept id INT from table above);

INSERT INTO employee
VALUES (employee id INT, "first name", "last name", role id INT from table above, manager id INT same as employee id),
       (employee id INT, "first name", "last name", role id INT from table above, manager id INT same as employee id),
       (employee id INT, "first name", "last name", role id INT from table above, manager id INT same as employee id),
       (employee id INT, "first name", "last name", role id INT from table above, manager id INT same as employee id),
       (employee id INT, "first name", "last name", role id INT from table above, manager id INT same as employee id),
       (employee id INT, "first name", "last name", role id INT from table above, manager id INT same as employee id),
       (employee id INT, "first name", "last name", role id INT from table above, manager id INT same as employee id);