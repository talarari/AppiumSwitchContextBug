browser.addCommand("switchToWebviewContext", function () {
    console.log(`switching ${this.context().value} => WEBVIEW_sample.com.appiumswitchcontextbug`);
        this.context('WEBVIEW_sample.com.appiumswitchcontextbug');

});

browser.addCommand("switchToNativeContext", function () {
    console.log(`switching ${this.context().value} => NATIVE_APP`);
        this.context('NATIVE_APP');
});

module.exports = browser;