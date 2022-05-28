# Makefile grupo 10

.PHONY: run-all-tests

# CYPRESS TESTS TARGETS
run-cypress-test-4-45-0-min:
	cd Test-ghost-v4.45.0-min/Cypress && cypress run --headless && cd ..

run-cypress-test-4-0-0:
	cd Test-ghost-v4.0.0/Cypress && cypress run --headless && cd ..

# ALL TESTS TARGETS
run-visual-regression:
	cd Report && npm install && node index.js && open ./results/report.html &

run-all-cypress-test: run-cypress-test-4-45-0-min run-cypress-test-4-0-0

run-all-tests: run-all-cypress-test run-cypress-data-tests run-visual-regression

# DATA TESTS TARGETS

run-cypress-data-tests:
	cd Pruebas-generacion-datos/Cypress && npm install && cypress run --headless && cd ../..

# MONKEY TEST TARGET
run-cypress-monkey:
	cd Monkeys/ && npm install && cypress run --headless && cd ../..

# RIPPER TEST TARGET
run-ripper:
	cd Ripper/ && npm install && node index.js http://estudiantesmiso.space:2368/ true