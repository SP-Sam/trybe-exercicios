-- Praticando GROUP BY
SELECT `active`, COUNT(*) AS 'Quantidade' FROM sakila.customer
	GROUP BY active;

SELECT store_id AS 'ID da loja',
	`active` AS 'Status',
	COUNT(*) AS 'Quantidade'
	FROM sakila.customer
  GROUP BY store_id, `active`;

SELECT AVG(rental_duration) AS avg_rental_duration, rating
	FROM sakila.film
  GROUP BY rating
  ORDER BY avg_rental_duration DESC;

SELECT district, COUNT(*) AS quantidade
	FROM sakila.address
  GROUP BY district
  ORDER BY quantidade DESC;
