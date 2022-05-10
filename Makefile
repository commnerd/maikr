.PHONY: help
help:
	@echo "Usage:"
	@echo "  make {subcommand}"
	@echo ""
	@echo "subcommands:"
	@echo "  help - this list of help commands"
	@echo "  dev  - Spin up development environment"


.PHONY: dev
dev:
	@docker-compose up -d
