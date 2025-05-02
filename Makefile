# Vars

# Tasks
clean: clean-order clean-management clean-auth

clean-order:
	npm run docusaurus clean-api-docs all -- --plugin-id order-open-api

clean-management:
	npm run docusaurus clean-api-docs all -- --plugin-id management-open-api

clean-auth:
	npm run docusaurus clean-api-docs all -- --plugin-id auth-open-api

doc: doc-order doc-management doc-auth

doc-order:
	npm run docusaurus gen-api-docs all -- --plugin-id order-open-api

doc-management:
	npm run docusaurus gen-api-docs all -- --plugin-id management-open-api

doc-auth:
	npm run docusaurus gen-api-docs all -- --plugin-id auth-open-api

clear:
	npm run docusaurus clear

build: clear clean doc
	npm run docusaurus build

build-order: clean-order doc-order build

build-management: clean-management doc-management build

build-auth: clean-auth doc-auth build

build-run: build serve

serve:
	npm run docusaurus serve