USE employees_db;

INSERT INTO department (name)
VALUES ("Accounting"),
       ("HR"),
       ("Manufacturing"),
       ("Sales"),
       ("R&D");

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 500000, null), 
       ("Executive", 200000, 001),
       ("Executive", 200000, 002),
       ("Executive", 200000, 003),
       ("Executive", 200000, 004),
       ("Executive", 200000, 005),
       ("Manager", 100000, 001),
       ("Manager", 100000, 002),
       ("Manager", 100000, 003),
       ("Manager", 100000, 004),
       ("Manager", 100000, 005),
       ("Head", 75000, 001),
       ("Head", 75000, 002),
       ("Head", 75000, 003),
       ("Head", 75000, 004),
       ("Head", 75000, 005);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Iglasius", "Proper", 001, null),
       ("Connor", "Snowdon", 002, 001),
       ("Colleen", "Berelli", 003, 001),
       ("Samantha", "Latchki", 004, 001),
       ("April", "Carty", 005, 001),
       ("Helen", "Bergona", 006, 002),
       ("Nick", "Banks", 007, 002),
       ("Eric", "Clariton", 008, 003),
       ("Patrick", "Neehow", 009, 004),
       ("Jessica", "Thompson", 010, 005),
       ("Alan", "Fairfield", 011, 006),
       ("Nate", "Labatecha", 012, 007),
       ("Stella", "Armon", 013, 008),
       ("Abby", "Gistford", 014, 009),
       ("Ginger", "Lakehouse", 015, 010),
       ("Max", "Marble", 016, 011);