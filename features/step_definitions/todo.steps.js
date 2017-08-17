var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    { defineSupportCode } = require('cucumber'),
    host = process.env.HOST || 'http://localhost',
    port = process.env.PORT ? ':' + process.env.PORT : ':3000',
    baseUrl = [host, port, '/'].join('');

defineSupportCode(function ({ Given, When, Then }) {

});