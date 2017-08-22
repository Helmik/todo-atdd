var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    { defineSupportCode } = require('cucumber'),
    host = process.env.HOST || 'http://localhost',
    port = process.env.PORT ? ':' + process.env.PORT : ':4200',
    baseUrl = [host, port, '/'].join('');

defineSupportCode(function ({ Given, When, Then }) {
    Given("that I enter to the application", function (callback) {
        this.driver.wait(until.urlIs(baseUrl))
            .then(function (res) {
                callback(null, res);
            })
            .catch(function (err) {
                callback(err)
            });
        // this.driver.get(baseUrl).then(function () {
        //     callback();
        // });
    });

    Then('I can see {string}', function (string, callback) {

        // var self = this.driver;
        // var query = driver.wait(until.elementLocated(By.className("myTodo"))).then(function(queCosa) {
        //     console.log('noo!', queCosa);
        // });

        // self.wait(until.elementIsVisible(By.className("myTodo"))).then(function () {
        //     this.driver.findElement(By.className("myTodo"))
        //         // this.driver.findElement(By.xpath("//*[text()='" + string + "']"))
        //         .then(function (res) {
        //             self.wait(until.elementTextContains(string, res)).then(function () {

        //                 console.log("crees?", res);
        //                 callback();
        //                 // callback(null, res)
        //             })
        //             // .catch(function (err) {
        //             //     callback(err);
        //             // });
        //         });
        // })

    })
});