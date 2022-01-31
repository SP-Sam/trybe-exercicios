-- Desafios com DIV e MOD
SELECT IF (15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';
SELECT 220 DIV 12 AS 'Grupos completos de 12';
SELECT 220 MOD 12 AS 'Lugares sobrando';

-- Para Fixar
SELECT ROUND(15 + (RAND() * 5));
SELECT ROUND(15.7515971, 5);
SELECT FLOOR(39.494);
SELECT CEIL(85.243);