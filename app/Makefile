build:
	docker-compose build

up:
	docker-compose up --remove-orphans --force-recreate --always-recreate-deps

down:
	docker-compose down --volumes

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
