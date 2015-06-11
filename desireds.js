'use strict';

module.exports = {
    chrome: {browserName: 'chrome', platform: 'Windows 8'},
    safari: {browserName: 'safari'},
    firefox: {browserName: 'firefox', platform: 'Windows 8.1'},
    ie11_win8: {browserName: 'internet explorer', platform: 'Windows 8.1', version: '11.0'},
    ie10_win7: {browserName: 'internet explorer', platform: 'Windows 7', version: '10.0'},
    ie9_win7: {browserName: 'internet explorer', platform: 'Windows 7', version: '9.0'},
    ie8_win7: {browserName: 'internet explorer', platform: 'Windows 7', version: '8.0'},
};
/*
caps = {browserName: 'firefox'};
caps['platform'] = 'Windows 8.1';
caps['version'] = '38.0';

caps = {browserName: 'safari'};
caps['platform'] = 'OS X 10.10';
caps['version'] = '8.0';
caps['screenResolution'] = '1024x768';
*/
