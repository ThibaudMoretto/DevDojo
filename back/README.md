# projet-12-coding-dojo : Back side

git subtree push --prefix back/ heroku main

Dépendances :
    bcrypt: 5.0.1,
    cors: 2.8.5,
    dotenv: 10.0.0,
    express: 4.17.1,
    express-swagger-generator: 1.1.17,
    joi: 17.4.2,
    jsonwebtoken: 8.5.1,
    pg: 8.7.1,
    redis: 3.1.2,
    sanitizer: 0.1.3,
    slugify: 1.6.0

Doc API : https://coding--dojo.herokuapp.com/api-docs

Index :
    - Hash sur le champ ID de la table ressource,
    - Hash sur le champ ID de la table author

Hébergement :
    - Heroku
    - AWS EC2

Tests unitaires :
    - Jest (ONGOING)

Gestion de cache :
    - Redis

Sécurité :
    - bcrypt
    - sanitizer
    - cors
    - joi
    - jsonwebtoken