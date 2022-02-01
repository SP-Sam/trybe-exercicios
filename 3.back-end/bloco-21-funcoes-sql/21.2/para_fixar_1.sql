SELECT a.actor_id, a.first_name, fa.film_id
	FROM sakila.actor AS a
  INNER JOIN sakila.film_actor AS fa
  ON a.actor_id = fa.actor_id;

SELECT s.first_name, s.last_name, a.address
	FROM sakila.staff AS s
  INNER JOIN sakila.address AS a
  ON a.address_id = s.address_id;

SELECT
	c.customer_id,
  c.first_name,
  c.email,
  c.address_id,
  a.address
	FROM sakila.customer AS c
  INNER JOIN sakila.address AS a
  ON c.address_id = a.address_id
  ORDER BY c.first_name DESC
  LIMIT 100;

SELECT
	c.first_name,
  c.email,
  c.address_id,
  a.address,
  a.district
	FROM sakila.customer AS c
	INNER JOIN sakila.address AS a
  ON c.address_id = a.address_id
	WHERE a.district = 'california' AND c.first_name LIKE '%rene%';

SELECT c.first_name, COUNT(a.address) AS 'quantidade de endereços'
	FROM sakila.customer AS c
  INNER JOIN sakila.address AS a
		ON c.address_id = a.address_id
  WHERE c.`active` = 1
  GROUP BY c.customer_id
  ORDER BY c.first_name DESC, c.last_name DESC;

SELECT
	s.first_name,
  s.last_name,
	AVG(p.amount) AS 'Média de pagamento'
	FROM sakila.staff AS s
	INNER JOIN sakila.payment AS p
		ON s.staff_id = p.staff_id
	WHERE YEAR(p.payment_date) = 2006
	GROUP BY s.staff_id;

SELECT
	act.actor_id,
  act.first_name,
  f.film_id,
  f.title
	FROM sakila.actor AS act
  INNER JOIN sakila.film_actor AS f_act
		ON act.actor_id = f_act.actor_id
  INNER JOIN sakila.film AS f
		ON f.film_id = f_act.film_id;