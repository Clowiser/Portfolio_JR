const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver")
export {};

const example = () => {
    test("navigate to Portfolio Page and Contact Page", async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get("http://localhost:3001/");

        await driver.findElement(By.css("#root > nav > div > div > a:nth-child(2) > li")).click().then(function () {
            driver.sleep(50000);
        });
        await driver.findElement(By.css("#root > nav > div > div > a:nth-child(4) > li")).click();
        await driver.quit();

    }, 30000)
}

example();