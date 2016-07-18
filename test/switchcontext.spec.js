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
        browser.waitForVisible('#main');
        console.log('found #main in web context');

        browser.switchToNativeContext();
        browser.switchToWebviewContext();

        browser.waitForVisible('#main');
        console.log('found #main in web context again');

    });

   it('should click a native button, look for a non existent web element then look for an existing one',function(){

       browser.switchToNativeContext();

       browser.waitForVisible('~nativebutton');
       browser.element('~nativebutton').click();
       console.log('clicked native button');

       browser.switchToWebviewContext();

       browser.waitForVisible('#main');
       console.log('found #main in web context');


       try{
           console.log('trying to find a non existent element');
           browser.waitForVisible('#this-does-not-exist');
       }
       catch (err){
           console.log('couldnt find it, trying to find another element that does exist');
           browser.switchToWebviewContext();
           browser.waitForVisible('#main');
       }
   })
});