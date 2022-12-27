build:
	docker compose build

up:
	docker compose down --volumes && docker network create spothood-network && docker compose up --remove-orphans --force-recreate --always-recreate-deps

down:
	docker compose down --volumes && docker network remove spothood-network

up-prod:
	docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
