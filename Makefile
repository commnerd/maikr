ENVIRONMENTS = $(shell ls env)
ENV = $(shell echo "$(filter $(ENVIRONMENTS), $(MAKECMDGOALS) dev)" | awk '{ print $$1; }')
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
	@$(MAKE) -sf env/$(ENV)/make/Makefile

dev:
	@if [ "$(GOALS)" ]; \
	then \
		$(MAKE) -sf env/$(ENV)/make/Makefile $(GOALS); \
	else \
		$(MAKE) -sf env/$(ENV)/make/Makefile serve; \
	fi

$(filter-out dev, $(ENVIRONMENTS)):
	@if [ "$(GOALS)" ]; \
	then \
		$(MAKE) -sf env/$(ENV)/make/Makefile $(GOALS); \
	else \
		if [ "$(ENV)" == "$(MAKECMDGOALS)" ]; \
		then \
			$(MAKE) -s $(ENV) help; \
		fi; \
	fi

%:
	@echo "$(GOALS)"
	@exit 0