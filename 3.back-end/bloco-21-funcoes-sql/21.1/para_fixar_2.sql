SELECT film_id, title,
	IF (title = 'ACE GOLDFINGER', 'Já assisti a esse filem', 'Não coonheço o filme')
  AS 'conheço o filme?' FROM sakila.film;
  
SELECT title, rating, CASE
	WHEN rating = 'G' THEN 'Livre para todos'
  WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
  WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
  WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
  ELSE 'Proibido para menores de idade'
END AS 'público-alvo'
FROM sakila.film;