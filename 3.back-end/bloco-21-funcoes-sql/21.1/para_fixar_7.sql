SELECT rating, AVG(length) AS duracao_media
	FROM sakila.film
	GROUP BY rating
  HAVING duracao_media BETWEEN 115 AND 121.50
  ORDER BY duracao_media DESC;

SELECT rating, SUM(replacement_cost) AS custo_de_substituicao_total
	FROM sakila.film
	GROUP by rating
  HAVING custo_de_substituicao_total > 3950.50
  ORDER BY custo_de_substituicao_total DESC;