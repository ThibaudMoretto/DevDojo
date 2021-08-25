-- Deploy devdojo-api:add_indexes to pg

BEGIN;

CREATE INDEX ressource_idx ON "ressource" USING hash (id);
CREATE INDEX author_idx ON "author" USING hash (id);

COMMIT;
