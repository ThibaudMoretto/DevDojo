-- Verify devdojo-api:init on pg

BEGIN;

SELECT * FROM "token";
SELECT * FROM "role";
SELECT * FROM "language";
SELECT * FROM "ressource_type";
SELECT * FROM "category";
SELECT * FROM "difficulty";
SELECT * FROM "technology";
SELECT * FROM "account";
SELECT * FROM "ressource";
SELECT * FROM "author";
SELECT * FROM "user_vote_ressource";
SELECT * FROM "user_saved_ressource";
SELECT * FROM "user_checked_ressource";
SELECT * FROM "ressource_requires_technology";
SELECT * FROM "ressource_relates_technology";
SELECT * FROM "technology_belongsto_category";

ROLLBACK;