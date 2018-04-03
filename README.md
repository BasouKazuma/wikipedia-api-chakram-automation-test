# Tests for Wikipedia API using Chakram

This project is for running automation tests against the [Wikipedia API](https://en.wikipedia.org/w/api.php) using the [Chakram](http://dareid.github.io/chakram/) framework.

## Notes

* Run all commands below from the root directory of the project

## Setup

* Install Node.js - ([download](https://nodejs.org/en/download/))
* Install Mocha - `npm install -g mocha`
* Install project dependencies - `npm install`
* Update the username and password in `resources/test_user.json` to your own credentials
  * Note: You have to use the [Wikipedia Special:BotPasswords](https://en.wikipedia.org/wiki/Special:BotPasswords) page to create a username and password for the test_user and test_password.

## Run Tests

### One at a time

`mocha tests/ --grep @full-suite`

### Parallel with Retry

`./node_modules/.bin/mocha-parallel-tests tests/ --max-parallel 10 --retry 5 --grep @full-suite`
