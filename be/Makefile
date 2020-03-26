SHELL  := /bin/bash

init: up
	npm install
kill:
	docker-compose kill && docker-compose rm -vf
up:
	docker-compose up -d
status:
	docker-compose ps && docker-compose logs --tail=100
logs:
	docker-compose logs -f
pull:
	docker-compose pull
restart: kill up status
ps: 
	docker-compose ps