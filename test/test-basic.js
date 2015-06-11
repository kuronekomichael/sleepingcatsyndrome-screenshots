var desireds = require('../desireds');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

// checking sauce credential
if(!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY){
    console.warn(
        '\nPlease configure your sauce credential:\n\n' +
        'export SAUCE_USERNAME=<SAUCE_USERNAME>\n' +
        'export SAUCE_ACCESS_KEY=<SAUCE_ACCESS_KEY>\n\n'
    );
    throw new Error("Missing sauce credentials");
}

var desired = desireds[process.env.DESIRED_NAME];
if (!desired) {
    console.warn(
        '\nPlease configure your desired name:\n\n' +
        'export DESIRED_NAME=<Desired Name on `desireds.js`>\n\n'
    );
    throw new Error("Missing desired settings");
}
desired.name = '眠猫症候群 with ' + desired.browserName + (desired.version ? ' v' + desired.version : '') + (desired.platform ? ' on ' + desired.platform : '');
desired.tags = ['smoke test'];

var screenshotDir = path.join(process.cwd(), 'screenshots', desired.name);
mkdirp.sync(screenshotDir);

describe(desired.name, function() {
    var browser;
    var allPassed = true;

    before(function(done) {
        var username = process.env.SAUCE_USERNAME;
        var accessKey = process.env.SAUCE_ACCESS_KEY;
        browser = wd.promiseChainRemote("ondemand.saucelabs.com", 80, username, accessKey);
        if(process.env.VERBOSE){
            // optional logging
            browser.on('status', function(info) {
                console.log(info.cyan);
            });
            browser.on('command', function(meth, path, data) {
                console.log(' > ' + meth.yellow, path.grey, data || '');
            });
        }
        browser
            .init(desired)
            .nodeify(done);
    });

    afterEach(function(done) {
        allPassed = allPassed && (this.currentTest.state === 'passed');
        done();
    });

    after(function(done) {
        browser
            .quit()
            .sauceJobStatus(allPassed)
            .nodeify(done);
    });

    [
        {name:'1.index', url:'http://sleepingcatsyndrome.com/'},
        {name:'2.text post with quote', url:'http://sleepingcatsyndrome.com/post/120823134705'},// テキスト投稿 with 引用
        {name:'3.text post with code', url:'http://sleepingcatsyndrome.com/post/120269007295'},// テキスト投稿 with コード
        {name:'4.image post', url:'http://sleepingcatsyndrome.com/post/106411487165'},// 画像投稿
    ].forEach(function(target) {
        it("page >" + target.name, function(done) {
            browser
                .get(target.url)
                .takeScreenshot()
                .then(function (data) {
                    var filename = path.join(screenshotDir, target.name + '.png');
                    fs.writeFileSync(filename, data, 'base64');
                })
                .nodeify(done);
        });
    });


});
