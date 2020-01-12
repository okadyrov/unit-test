# Unit-testing with Mocha & Chai

In this project we learn how to use [Mocha Test Framework](https://mochajs.org/) and [Chai Assertion Library](https://www.chaijs.com/) for Unit Testing in NodeJS. 
This is a set of unit tests to check given [Functions](index.js). Tests are designed to cover different types of inputs.

### List of files
* [Functions](index.js)
* [Tests with Mocha Assertion](test/index.spec.js)
* [Tests with Chai Expect](test/chai-index.spec.js)


## Installation
1) check if you have node.js installed on your computer: 
terminal => `node -v`

+ If you get message 'command not found' => you don't have node installed. Go to the next step.
+ If you get message 'Welcome to Node.js version-here' => you do have node installed. Go to step 3.

2) To Install node.js:
+ Go to [nodejs.org](https://nodejs.org/en/) to install node.js
+ After you installed node.js to you computer, check again: 
terminal => `node -v ` // You should get the message with node.js current version

3) To Initiate Mocha for the project you need do the following:
terminal => `npm install --global mocha `// to install mocha globally
            `npm install --save-dev mocha`// to install mocha as development dependency for your project 

4) To Install Chai for the project you need do the following:
terminal => `npm install chai`
