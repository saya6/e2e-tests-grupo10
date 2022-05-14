# Makefile grupo 10

.PHONY: setup run-all-tests

setup:
	cd Test-ghost-v4.45.0/Kraken && npm install && cd ..
	cd Test-ghost-v4.45.0-min/Kraken && npm install && cd ..
	cd Test-ghost-v4.0.0/Kraken && npm install && cd ..
	
# KRAKEN TESTS TARGETS
run-kraken-test-4-45-0: 
	cd Test-ghost-v4.45.0/Kraken && node_modules/kraken-node/bin/kraken-node run && cd ..

run-kraken-test-4-45-0-min: 
	cd Test-ghost-v4.45.0-min/Kraken && node_modules/kraken-node/bin/kraken-node run && cd ..

run-kraken-test-4-0-0: 
	cd Test-ghost-v4.0.0/Kraken && node_modules/kraken-node/bin/kraken-node run && cd ..

# CYPRESS TESTS TARGETS
run-cypress-test-4-45-0:
	cd Test-ghost-v4.45.0/Cypress && cypress run --headless && cd ..

run-cypress-test-4-45-0-min:
	cd Test-ghost-v4.45.0-min/Cypress && cypress run --headless && cd ..

run-cypress-test-4-0-0:
	cd Test-ghost-v4.0.0-min/Cypress && cypress run --headless && cd ..

# ALL TESTS TARGETS
run-visual-regression:
	cd Report && npm install && node index.js && open ./results/index.html

run-all-cypress-test: run-cypress-test-4-45-0 run-cypress-test-4-0-0

run-all-kraken-test: run-kraken-test-4-45-0	run-kraken-test-4-0-0

run-all-tests: run-all-cypress-test	run-all-kraken-test	run-visual-regression
