ENVIRONMENTS = dev
ENV = $(shell [ -f "env/make/Makefile.$*" ] && { echo "$*"; } || echo "dev";)
TARGETS = $(filter-out $(ENVIRONMENTS), $(MAKECMDGOALS))

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
	@$(MAKE) -sf env/make/Makefile.$(ENV) env-help 2>/dev/null || $(MAKE)

%:
	@$(MAKE) -f env/make/Makefile.$(ENV) $(TARGETS)