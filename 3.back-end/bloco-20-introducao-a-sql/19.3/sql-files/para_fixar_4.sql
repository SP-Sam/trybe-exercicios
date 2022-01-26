SELECT COUNT(*) FROM rental
	WHERE DATE(return_date) = '2005-05-25';

SELECT COUNT(*) FROM rental
	WHERE DATE(return_date) BETWEEN '2005-07-01' AND '2005-08-22';
  
SELECT
	DATE(rental_date),
  YEAR(rental_date),
  MONTH(rental_date),
  DAY(rental_date),
  HOUR(rental_date),
  MINUTE(rental_date),
  SECOND(rental_date)
  FROM rental
  WHERE rental_id = 10330;
  
SELECT * FROM rental
	WHERE return_date LIKE '2005-07-28 22%';