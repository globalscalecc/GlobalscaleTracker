include .env
VERSION := $(shell jq -r '.version' package.json)

bld:
	rm -rf dist/*
	npm run build
	cp ./dist/globalscale.tracker.js ./testpage/globalscaletracker.js
	rm -rf dist/types
