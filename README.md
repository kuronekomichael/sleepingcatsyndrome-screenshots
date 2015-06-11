sleepingcatsyndrome-screenshots
================================

get screenshots `http://sleepingcatsyndrome.com`

## Requirement

- SauceLabs Account ->  [https://saucelabs.com/](https://saucelabs.com/)
- Node.js

```
$ npm install
```

## Usage

```
export SAUCE_USERNAME=<your saucelabs's username>
export SAUCE_ACCESS_KEY=<your saucelabs's access key>
export DESIRED_NAME=chrome

mocha
```

### Get all screenshots from every browser

```
export SAUCE_USERNAME=<your saucelabs's username>
export SAUCE_ACCESS_KEY=<your saucelabs's access key>

export DESIRED_NAME=chrome && mocha
export DESIRED_NAME=safari && mocha
export DESIRED_NAME=firefox && mocha
export DESIRED_NAME=ie11_win8 && mocha
export DESIRED_NAME=ie10_win7 && mocha
export DESIRED_NAME=ie9_win7 && mocha
export DESIRED_NAME=ie8_win7 && mocha

```
