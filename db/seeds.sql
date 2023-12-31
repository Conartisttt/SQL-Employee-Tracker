USE employees_db;

INSERT INTO department
VALUES (001, "Accounting"),
       (002, "HR"),
       (003, "Manufacturing"),
       (004, "Sales"),
       (005, "R&D");

INSERT INTO role
VALUES (001, "CEO", 500000, null), 
       (002, "Executive", 200000, 001),
       (003, "Executive", 200000, 002),
       (004, "Executive", 200000, 003),
       (005, "Executive", 200000, 004),
       (006, "Executive", 200000, 005),
       (007, "Manager", 100000, 001),
       (008, "Manager", 100000, 002),
       (009, "Manager", 100000, 003),
       (010, "Manager", 100000, 004),
       (011, "Manager", 100000, 005),
       (012, "Head", 75000, 001),
       (013, "Head", 75000, 002),
       (014, "Head", 75000, 003),
       (015, "Head", 75000, 004),
       (016, "Head", 75000, 005);
       
INSERT INTO employee
VALUES (001, "Iglasius", "Proper", 001, null),
       (002, "Connor", "Snowdon", 002, 001),
       (003, "Colleen", "Berelli", 003, 001),
       (004, "Samantha", "Latchki", 004, 001),
       (005, "April", "Carty", 005, 001),
       (006, "Helen", "Bergona", 006, 002),
       (007, "Nick", "Banks", 007, 002),
       (008, "Eric", "Clariton", 008, 003),
       (009, "Patrick", "Neehow", 009, 004),
       (010, "Jessica", "Thompson", 010, 005),
       (011, "Alan", "Fairfield", 011, 006),
       (012, "Nate", "Labatecha", 012, 007),
       (013, "Stella", "Armon", 013, 008),
       (014, "Abby", "Gistford", 014, 009),
       (015, "Ginger", "Lakehouse", 015, 010),
       (016, "Max", "Marble", 016, 011);