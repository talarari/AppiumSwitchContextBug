var webdriverio = require('webdriverio');
var browser = require('./browser');

describe('switch context bug', function() {

   it('should switch between contexts like a fox',function(){
       browser.pause(10000);

       browser.switchToNativeContext();


       browser.waitForVisible('~nativebutton');
       browser.element('~nativebutton').click();
       console.log('clicked native button');

       browser.switchToWebviewContext();

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