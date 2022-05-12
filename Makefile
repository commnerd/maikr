ENVIRONMENTS = dev
ENV = $(shell [ -f "env/make/Makefile.$*" ] && { echo "$*"; } || echo "dev";)
TARGETS = $(filter-out $(ENVIRONMENTS) help, $(MAKECMDGOALS))

.PHONY: help
help:
	@echo "Usage:"
	@echo "  make {env?} {subcommand}"
	@echo "  note: If {env} is omitted, dev is defaulted."
	@echo ""
	@echo "envs:"
	@for env in $(ENVIRONMENTS); do \
		echo "  $${env} - Run $${env} environment subcommand"; \
	done
	@$(MAKE) -sf env/make/Makefile.$(ENV) env-help $(TARGETS) 2>/dev/null

dev:
	@$(MAKE) -sf env/make/Makefile.$(ENV) serve $(TARGETS) 2>/dev/null

%:
	@$(MAKE) -sf env/make/Makefile.$(ENV) $(TARGETS) 2>/dev/null
