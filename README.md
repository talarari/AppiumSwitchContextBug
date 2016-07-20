this repository is a reproduction of an appium bug that happens when switching between native and web contexts.

the bug happens when :
* switching to a web context
* looking for an element that does not exist
* after not finding it, looking for an element that does exist
* appium server gets stuck and stops responding

to run the sample do the following:
* cd into test directory : cd test
* run npm install
* run appium server in a seperate console window , open a console and type : appium
* run the webdriver io tests: npm test


the tests use a prebuilt apk, which is located in apk/app-debug.apk.
if you would like to compile the app yourself , build the android project either with android studio or gradlew assembledebug, and drop the file app-debug.apk instead of the one in root/apk/app-debug.apk.

