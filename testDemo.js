//引入WebDriverIO
const wdio = require("webdriverio");

//配制参数
const opts = {
    port: 4723,
    desiredCapabilities: {
        platformName: "Android",
        platformVersion: "8.1",
        deviceName: "Nexus_5X_API",
        app: "./apk/ApiDemos-debug.apk",
        automationName: "UiAutomator2"
    }
};


//启动
const client = wdio.remote(opts);

client
    .init()
    .click("~App")
    .click("~Alert Dialogs")
    .back()
    .back()
    .end();
