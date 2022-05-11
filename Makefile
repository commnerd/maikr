ENV = $(shell [ -f "env/make/Makefile.$*" ] && { echo "$*"; } || echo "dev";)
ENV_TARGETS = $(filter-out $*, $(MAKECMDGOALS))

.PHONY: help
help:
	@echo "Usage:"
	@echo "  make {env?} {subcommand}"
	@echo "  note: If {env} is omitted, dev is defaulted."
	@echo ""
	@echo "env:"
	@echo "  dev - Run dev environment subcommand"
	@$(MAKE) -sf env/make/Makefile.$(ENV) help 2>/dev/null || $(MAKE)

%:
	$(MAKE) -f env/make/Makefile.$(ENV) $(ENV_TARGETS)