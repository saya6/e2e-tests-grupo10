setup:
	cd Test-ghost-v4.45.0/Kraken && npm install
	
run-kraken-test: 
	cd Test-ghost-v4.45.0/Kraken && node_modules/kraken-node/bin/kraken-node run

clean-reports:
	rm -rf Test-ghost-v4.45.0/Kraken/reports/*

run-cypress-test:
	cd Test-ghost-v4.45.0/Cypress && cypress run --headless

run-all-tests: 
	run-kraken-test
	cd ../
	run-cypress-test
