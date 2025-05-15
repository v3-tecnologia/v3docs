# Vars

# Tasks
clean: clean-order clean-management clean-auth clean-event

clean-order:
	npm run docusaurus clean-api-docs all -- --plugin-id order-open-api

clean-management:
	npm run docusaurus clean-api-docs all -- --plugin-id management-open-api

clean-auth:
	npm run docusaurus clean-api-docs all -- --plugin-id auth-open-api

clean-event:
	npm run docusaurus clean-api-docs all -- --plugin-id event-open-api

clean-notifications:
	npm run docusaurus clean-api-docs all -- --plugin-id notifications-open-webhook

doc: doc-order doc-management doc-auth doc-event doc-notifications

doc-order:
	npm run docusaurus gen-api-docs all -- --plugin-id order-open-api

doc-management:
	npm run docusaurus gen-api-docs all -- --plugin-id management-open-api

doc-auth:
	npm run docusaurus gen-api-docs all -- --plugin-id auth-open-api

doc-event:
	npm run docusaurus gen-api-docs all -- --plugin-id event-open-api

doc-notifications:
	npm run docusaurus gen-api-docs all -- --plugin-id notifications-open-webhook

clear:
	npm run docusaurus clear

build: clear clean doc
	npm run docusaurus build

build-order: clean-order doc-order
	npm run docusaurus build

build-management: clean-management doc-management
	npm run docusaurus build

build-auth: clean-auth doc-auth
	npm run docusaurus build

build-event: clean-event doc-event
	npm run docusaurus build

build-notifications: clean-notifications doc-notifications
	npm run docusaurus build

build-run: build run

just-build:
	npm run docusaurus build

run:
	npm run docusaurus serve