# NodeJS Monobank API Wrapper

## Installation

`$ yarn add monobank-node`

 **OR**
 
`$ npm i monobank-node`

## Initialize

1.  Go to https://api.monobank.ua/ and obtain token

2. `import Monobank from 'node-monobank'`

3. `const monobank = new Monobank('YOUR TOKEN');`

## Methods


1. `getCurrencyRates()` - returns currency rates as a promise. The information is cached and updated no more than once every 5 hours.

2. `getPersonalInfo()` - returns personal info and the list of accounts. Limit on the use of the function no more than 1 time in 60 seconds.

3. `getStatement({ from, to })` - returns a statement for the time `from` to `to` in UNIX time format.  The maximum time for which it is possible to receive an statement is 31 days (2678400 seconds). Limit on the use of the function no more than 1 time in 60 seconds.

