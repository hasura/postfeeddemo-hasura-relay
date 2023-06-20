docker compose cp data/users.csv database:/
docker compose cp data/posts.csv database:/
docker compose exec database psql -U dbuser -d appdb -c "COPY users(id, name, created_at) FROM '/users.csv' CSV HEADER;"
docker compose exec database psql -U dbuser -d appdb -c "COPY posts(id, user_id, title, body, starred, created_at) FROM '/posts.csv' CSV HEADER;"