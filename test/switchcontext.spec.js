var webdriverio = require('webdriverio');
var browser = require('./browser');

describe('switch context bug', function() {


    it('should find a web element',function() {
        browser.switchToWebviewContext();
        console.log('waiting for #main to be visible');
        browser.waitForVisible('#main');
        console.log('found #main in web context');
    });

    it('should find a web element, switch to native and back to web context and find it again',function() {
        browser.switchToWebviewContext();
        console.log('waiting for #main to be visible');
        browser.waitForVisible('#main');
        console.log('found #main in web context');

        browser.switchToNativeContext();
        browser.switchToWebviewContext();

        browser.waitForVisible('#main');
        console.log('found #main in web context again');

    });

   it('should fail to find a non existing element then find an existing one',function(){

       browser.switchToWebviewContext();

       console.log('waiting for #main to be visible');
       browser.waitForVisible('#main');
       console.log('found #main in web context');


       try{
           console.log('trying to find a non existent element');
           browser.waitForVisible('#this-does-not-exist');
       }
       catch (err){
           console.log('couldnt find it, trying to find another element that does exist');
           var visible = browser.isVisible('#main');
           console.log(visible);

       }

   })
});