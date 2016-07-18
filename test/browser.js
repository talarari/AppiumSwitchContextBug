browser.addCommand("switchToWebviewContext", function () {

    console.log(' ');
    console.log('--------------------------------');
    console.log(`switching ${this.context().value} => WEBVIEW_sample.com.appiumswitchcontextbug`);
    console.log('switching');
        this.context('WEBVIEW_sample.com.appiumswitchcontextbug');
    console.log('switched');
    console.log('--------------------------------');
    console.log(' ');

});

browser.addCommand("switchToNativeContext", function () {
    console.log('');
    console.log('--------------------------------');
    console.log(`switching ${this.context().value} => NATIVE_APP`);
    console.log('switching');
        this.context('NATIVE_APP');
    console.log('switched');
    console.log('--------------------------------');
    console.log(' ');
});

module.exports = browser;