SELECT * FROM film;
SELECT CONCAT(title, ' - ', release_year, ' - ', rating)
	AS Classificação FROM film;
SELECT COUNT(*) FROM film; 

SELECT DISTINCT(last_name) FROM actor;
SELECT first_name AS Nome, last_name AS Sobrenome FROM actor
	ORDER BY last_name, first_name DESC;

SELECT name FROM language LIMIT 5 OFFSET 1;

SELECT
	title,
  release_year,
  length,
  rating,
  replacement_cost
  FROM film
  ORDER BY length DESC, replacement_cost
  LIMIT 20;