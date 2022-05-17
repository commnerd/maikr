.DEFAULT: serve
CURRENT_DEV_CHAIN = "v0.1.x"

.PHONY: help
help:
	@echo ""
	@echo "subcommands:"
	@echo "  help    - This list of help commands"
	@echo "  dev     - Alias for serve"
	@echo "  down    - Spin down development environment"
	@echo "  restart - Restart dev environment"
	@echo "  serve   - Spin up development environment in Docker"

.PHONY: down
down:
	@if [ $(shell docker-compose ps | wc -l ) -gt 2 ]; \
	then \
		docker-compose down; \
	fi

.PHONY: restart
restart: down serve

.PHONY: serve
serve:
	@docker-compose up -d --build