browser.addCommand("switchToWebviewContext", function () {

    console.log('----- switching to webview -----')
    console.log('');
    console.log('current context:' + JSON.stringify(this.context().value));



    //if (this.context().value !== webViewContextId){
    console.log('switching');
    this.context('WEBVIEW_sample.com.appiumswitchcontextbug');
    console.log('switched');
    //}
    console.log('------------------');
    console.log(' ')
});

browser.addCommand("switchToNativeContext", function () {
    console.log('----- switching to native -----')
    console.log('');
    console.log('current context :' + JSON.stringify(this.context().value));

    //if (this.context().value !== 'NATIVE_APP'){
    console.log('switching');
    this.context('NATIVE_APP');
    console.log('switched');
    //}

    console.log('------------------');
    console.log(' ')
});

module.exports = browser;