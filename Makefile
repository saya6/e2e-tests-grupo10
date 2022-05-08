setup:
	cd Kraken && npm install

run-kraken-test: 
	cd Kraken && node_modules/kraken-node/bin/kraken-node run

clean-reports:
	rm -rf Kraken/reports/*

run-cypress-test:
	cd Cypress && cypress run --headless

run-all-tests: 
	run-kraken-test
	cd ../
	run-cypress-test
