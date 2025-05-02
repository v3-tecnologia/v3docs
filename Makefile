# Vars

# Tasks
clean: clean-order clean-management

clean-order:
	npm run docusaurus clean-api-docs all -- --plugin-id order-open-api

clean-management:
	npm run docusaurus clean-api-docs all -- --plugin-id management-open-api

doc: doc-order doc-management

doc-order:
	npm run docusaurus gen-api-docs all -- --plugin-id order-open-api

doc-management:
	npm run docusaurus gen-api-docs all -- --plugin-id management-open-api

clear:
	npm run docusaurus clear

build: clear clean doc
	npm run docusaurus build

build-order: clean-order doc-order
	npm run docusaurus build

build-management: clean-management doc-management
	npm run docusaurus build

build-run: build serve

serve:
	npm run docusaurus serve