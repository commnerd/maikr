.PHONY: help
help:
	@echo "Usage:"
	@echo "  make {subcommand}"
	@echo ""
	@echo "subcommands:"
	@echo "  help - this list of help commands"
	@echo "  dev  - Spin up development environment"


.PHONY: dev
dev: git-submodules
	@docker-compose up -d

.PHONY: git-submodules
git-submodules:
	@git submodule update --init
