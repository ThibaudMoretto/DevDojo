-- Revert devdojo-api:add_indexes from pg

BEGIN;

DROP INDEX ressource_idx;
DROP INDEX author_idx;

COMMIT;
