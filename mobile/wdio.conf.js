const path = require('path');

exports.config = {
  runner: 'local',
  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub',

  specs: ['./test/specs/**/*.js'],
  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:platformVersion': '11', // ajuste conforme seu emulador
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(__dirname, './apk/ApiDemos-debug.apk'),
    'appium:autoGrantPermissions': true
  }],

  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};

