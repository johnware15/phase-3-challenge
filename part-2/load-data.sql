\c phase-3-challenge

COPY grocery
FROM '/Users/johnware/Desktop/learners-guild/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;
SELECT * FROM grocery;

COPY grocery_store
FROM
'/Users/johnware/Desktop/learners-guild/phase-3-challenge/part-2/grocery_store.csv' DELIMITER ',' CSV HEADER;
SELECT * FROM grocery_store;
