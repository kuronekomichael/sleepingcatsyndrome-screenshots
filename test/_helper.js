var wd = require('wd');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
require('colors');

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

wd.configureHttp({
    timeout: 60000,
    retryDelay: 15000,
    retries: 5
});

global.expect = chai.expect;
global.wd = wd;
