CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
)

INSERT INTO pessoas (nome,nascimento) VALUES ('Johannes', '1995-09-30')
INSERT INTO pessoas (nome,nascimento) VALUES ('Jhemila', '1995-05-27')
INSERT INTO pessoas (nome,nascimento) VALUES ('Jakob', '1942-02-16')
