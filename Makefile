include server/.env

.PHONY: stop
stop:
	docker-compose --env-file ./server/.env stop

.PHONY: down
down:
	docker-compose --env-file ./server/.env down

.PHONY: logs
logs:
	docker-compose --env-file ./server/.env logs

.PHONY: dev
dev:
	docker-compose --env-file ./server/.env up -d

.PHONY: restart
restart:
	docker-compose --env-file ./server/.env restart
	
.PHONY: rebuild
rebuild:
	docker-compose --env-file ./server/.env up --build --force-recreate --no-deps -d

.PHONY: reset
reset:
	docker system prune -a