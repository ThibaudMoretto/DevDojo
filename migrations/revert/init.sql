-- Revert devdojo-api:init from pg

BEGIN;

DROP TABLE IF EXISTS
"token",
"role",
"language",
"ressource_type",
"category",
"difficulty",
"technology",
"account",
"ressource",
"author",
"user_vote_ressource",
"user_saved_ressource",
"user_checked_ressource",
"ressource_requires_technology",
"ressource_relates_technology",
"technology_belongsto_category";

COMMIT;
