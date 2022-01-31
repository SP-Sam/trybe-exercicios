-- Exercício 1
INSERT INTO sakila.staff (
	first_name,
  last_name,
  address_id,
  email,
  store_id,
  active,
  username,
  password
  )
	VALUES ('Samuel', 'Pereira', 5, 'teste@teste.com', 2, 1, 'spsam', 'senhaforte');

-- Exercício 2
INSERT INTO sakila.staff (
	first_name,
  last_name,
  address_id,
  email,
  store_id,
  active,
  username,
  password
  )
	VALUES
		('Gustavo', 'Dos Santos', 5, 'teste2@teste2.com', 1, 1, 'gusta', 'senhafraca'),
		('Gabriela', 'Pereira', 6, 'teste3@teste3.com', 2, 1, 'gbpereira', 'senhamuitoforte');

-- Exercício 3
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer
  LIMIT 5;
  
-- Exercício 4
INSERT INTO sakila.category (name)
	VALUES
		('Police'),
		('Fiction'),
    ('Adventure');
    
-- Exercício 5
INSERT INTO sakila.store (manager_staff_id, address_id) VALUES (3, 3);

SELECT * FROM sakila.store;