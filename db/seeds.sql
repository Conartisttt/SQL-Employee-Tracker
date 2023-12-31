USE employees_db;

INSERT INTO department
VALUES (001, "Accounting"),
       (002, "HR"),
       (003, "Manufacturing"),
       (004, "Sales"),
       (005, "R&D");

INSERT INTO role
VALUES (000, "CEO", 500000, null), 
       (001, "Executive", 200000, 001),
       (002, "Executive", 200000, 002),
       (003, "Executive", 200000, 003),
       (004, "Executive", 200000, 004),
       (005, "Executive", 200000, 005),
       (006, "Manager", 100000, 001),
       (007, "Manager", 100000, 002),
       (008, "Manager", 100000, 003),
       (009, "Manager", 100000, 004),
       (010, "Manager", 100000, 005),
       (011, "Head", 75000, 001),
       (012, "Head", 75000, 002),
       (013, "Head", 75000, 003),
       (014, "Head", 75000, 004),
       (015, "Head", 75000, 005);
       


INSERT INTO employee
VALUES (000, "Iglasius", "Proper", 000, null),
       (001, "Connor", "Snowdon", 001, 000),
       (002, "Colleen", "Berelli", 002, 000),
       (003, "Samantha", "Latchki", 003, 000),
       (004, "April", "Carty", 004, 000),
       (005, "Helen", "Bergona", 005, 000),
       (006, "Nick", "Banks", 006, 001),
       (007, "Eric", "Clariton", 007, 002),
       (008, "Patrick", "Neehow", 008, 003),
       (009, "Jessica", "Thompson", 009, 004),
       (010, "Alan", "Fairfield", 010, 005),
       (011, "Nate", "Labatecha", 011, 006),
       (012, "Stella", "Armon", 012, 007),
       (013, "Abby", "Gistford", 013, 008),
       (014, "Ginger", "Lakehouse", 014, 009),
       (015, "Max", "Marble", 015, 010);