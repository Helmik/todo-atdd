require('chromedriver')
var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');

function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .withCapabilities(seleniumWebdriver.Capabilities.phantomjs())
        .build();
}

defineSupportCode(function ({ setWorldConstructor }) {
    setWorldConstructor(CustomWorld);
});
