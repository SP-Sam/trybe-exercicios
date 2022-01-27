SET SQL_SAFE_UPDATES = 0;

-- Exercício 1
DELETE FROM sakila.actor
	WHERE first_name = 'KARL';

-- Exercício 2
DELETE FROM sakila.actor
	WHERE first_name = 'MATTHEW';

-- Exercício 3
DELETE FROM sakila.film_text
	WHERE `description` LIKE '%saga%';
  
-- Exercício 4
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

SELECT * FROM sakila.film_category;