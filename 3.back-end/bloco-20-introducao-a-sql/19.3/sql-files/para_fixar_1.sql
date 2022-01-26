SELECT * FROM customer
	WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
  
SELECT * FROM customer
	WHERE active IS FALSE
  AND store_id = 2
  AND first_name <> 'kenneth'
  ORDER BY first_name;
  
SELECT title, description, release_year, replacement_cost FROM film
	WHERE rating = 'G' AND replacement_cost >= 18
	ORDER BY replacement_cost DESC, title;

SELECT COUNT(*) FROM customer
	WHERE active IS TRUE;

SELECT * FROM customer
	WHERE active IS FALSE;

SELECT * FROM film
	WHERE rating = 'nc-17'
  ORDER BY rental_rate, title
  LIMIT 50;