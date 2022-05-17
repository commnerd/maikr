ENVIRONMENTS = dev
ENV = $(shell [ -f "env/$*/make/Makefile" ] && { echo "$*"; } || echo "dev";)
GOALS = $(filter-out $(ENVIRONMENTS) help, $(MAKECMDGOALS))

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
	@$(MAKE) -sf env/$(ENV)/make/Makefile env-help $(GOALS) 2>/dev/null

dev:
	@$(MAKE) -sf env/$(ENV)/make/Makefile serve $(GOALS)

%:
	@$(MAKE) -sf env/$(ENV)/make/Makefile $(GOALS)
