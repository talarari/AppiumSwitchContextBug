this repository is a reproduction of an appium bug that happens when switching between native and web contexts.

the bug happens when :
* switching to a web context
* looking for an element that does not exist
* after not finding it, looking for an element that does exist
* appium server gets stuck and stops responding

to run the sample do the following:
* install appium server globably : npm i -g appium
* cd into test directory : cd test
* compile the android app : npm run compile
* run appium server in a seperate console window , open a console and type : appium
* run the webdriver io tests: npm test

