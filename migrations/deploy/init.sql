-- Deploy devdojo-api:init to pg

BEGIN;

-- Comme c'est un script de création de tables ont s'assure que celles-ci
-- Soit supprimées avant de les créer.
-- On peut supprimer plusieurs tables en même temps
DROP TABLE IF EXISTS
"role",
"language",
"ressource_type",
"category",
"difficulty",
"technology",
"user",
"ressource",
"author",
"user_vote_ressource",
"user_saved_ressource",
"user_checked_ressource",
"author_uses_technology",
"ressource_requires_technology",
"ressource_relates_technology",
"technology_belongsto_category";

-- -----------------------------------------------------
-- Table "role"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "language"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "language" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "ressource_type"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "ressource_type" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "category"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "difficulty"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "difficulty" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "technology"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "technology" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "logo" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "account"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "account" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role_id" INT NOT NULL REFERENCES "role"("id"),
    "language_id" INT NOT NULL REFERENCES "language"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "author"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "author" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT '',
    "github_account" TEXT,
    "youtube_account" TEXT,
    "website" TEXT,
    "twitter_account" TEXT,
    "linkedin_acccount" TEXT,
    "twitch_account" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "ressource"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "ressource" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT UNIQUE NOT NULL,
    "slug" TEXT UNIQUE NOT NULL,
    "description" TEXT UNIQUE NOT NULL,
    "link" TEXT UNIQUE NOT NULL,
    "publication_date" TIMESTAMPTZ NOT NULL,
    "duration" INT,
    "is_free" BOOLEAN NOT NULL DEFAULT TRUE,
    "difficulty_id" INT NOT NULL REFERENCES "difficulty"("id"),
    "language_id" INT NOT NULL REFERENCES "language"("id"),
    "author_id" INT NOT NULL REFERENCES "author"("id") ON DELETE CASCADE, --On supprime la ressource si l'author_id est supprimé
    "ressource_type_id" INT NOT NULL REFERENCES "ressource_type"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-----------------------------------------------------
-----------------------------------------------------
------------------Tables de liaison------------------
-----------------------------------------------------
-----------------------------------------------------

-- -----------------------------------------------------
-- Table "user_vote_ressource" => Pour stocker les votes (quel user vote sur quelle ressource)
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user_vote_ressource" (
  "account_id" integer REFERENCES "account"("id") ON DELETE CASCADE,
  "ressource_id" integer REFERENCES "ressource" ("id") ON DELETE CASCADE,
  PRIMARY KEY ("account_id", "ressource_id")
);

-- -----------------------------------------------------
-- Table "user_saved_ressource" => Pour stocker les favoris
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user_saved_ressource" (
  "account_id" integer REFERENCES "account"("id") ON DELETE CASCADE,
  "ressource_id" integer REFERENCES "ressource" ("id") ON DELETE CASCADE,
  PRIMARY KEY ("account_id", "ressource_id")
);

-- -----------------------------------------------------
-- Table "user_checked_ressource" => Pour stocker les ressources consultées par user
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user_checked_ressource" (
  "account_id" integer REFERENCES "account"("id") ON DELETE CASCADE,
  "ressource_id" integer REFERENCES "ressource" ("id") ON DELETE CASCADE,
  PRIMARY KEY ("account_id", "ressource_id")
);

-- -----------------------------------------------------
-- Table "ressource_requires_technology" => Pour stocker les technos prérequises par une ressource
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "ressource_requires_technology" (
  "ressource_id" integer REFERENCES "ressource"("id") ON DELETE CASCADE,
  "technology_id" integer REFERENCES "technology" ("id") ON DELETE CASCADE,
  PRIMARY KEY ("ressource_id", "technology_id")
);

-- -----------------------------------------------------
-- Table "ressource_relates_technology" => Pour stocker les technos dont est relative la ressource
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "ressource_relates_technology" (
  "ressource_id" integer REFERENCES "ressource"("id") ON DELETE CASCADE,
  "technology_id" integer REFERENCES "technology" ("id") ON DELETE CASCADE,
  PRIMARY KEY ("ressource_id", "technology_id")
);

-- -----------------------------------------------------
-- Table "technology_belongsto_category" => Pour stocker affectations des technos aux catégories
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "technology_belongsto_category" (
  "category_id" integer REFERENCES "category"("id") ON DELETE CASCADE,
  "technology_id" integer REFERENCES "technology" ("id") ON DELETE CASCADE,
  PRIMARY KEY ("category_id", "technology_id")
);

-- Pour mettre fin à au bloc de transaction et l'exécuter
COMMIT;
