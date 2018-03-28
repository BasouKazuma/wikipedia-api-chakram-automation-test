# Tests for Wikipedia API using Chakram

This project is for running automation tests against the [Wikipedia API](https://en.wikipedia.org/w/api.php) using the [Chakram](http://dareid.github.io/chakram/) framework.

## Setup

* Install Node.js - ([download](https://nodejs.org/en/download/))
* Install Mocha - `npm install -g mocha`
* Install project dependencies - `npm install`

## Run Tests

### One at a time

`mocha tests/`

### Parallel with Retry

`./node_modules/.bin/mocha-parallel-tests tests --max-parallel 10 --retry 5`
