# December Labs - Technical test - 4th part

## About project

This project consist on an e2e automation test using `Nightwatch.js`. Being able to make reports for each run of the tests with `Allure Reporter`.

## Objective

To automatize the testing of the path that a `December Labs` web visitor would have to do to be able to `complete the "Get in touch" form` .

## Scope

The `e2e` will focus on testing key elements on `desktop screen resolution` that leads to a `successful navigation` to achieve the project `objective`.

#

## Basic test structure followed

```
nightwatch
	custom-assertions
	custom-commands
	page-objects
	globals.js
test
	Specs
	{$e2eName}.e2e.js
	...
.gitignore
README.md
nightwatch.config.js
package-lock,json
package.json
```

## Set up

To be able to successfully run the e2e automation test, follow the next steps:

1. Run `git clone https://github.com/JulianDeme/DL-TT-4thPart.git` to clone the repository.
2. Run `cd DL-TT-4thPart` to enter the project folder.
3. Run `npm install` to install all the dependencies.
4. Install `Java JDK 1.8` or higher to be able to run allure reporter.
5. Run `npm test` to run the e2e test.
6. Run `npm run allure-report` to generate test reports.

## Solution
First, the visibility of the header buttons is tested. Then, the "Get in touch" button is clicked, displaying the modal with the "Get in touch" form.
<br />
Once in the form, the visibility of all the fields is tested, along with the text in the elements that contains text.
<br />
Then, the "Send" buttons is clicked, activating the validations which are also tested, checking the changes on the attribute of the elements.
<br />
And finally, each field is completed one by one with valid data while checking the change on certain attributes to be sure that the result is correct.

## Proposed improvements
- Implementation of data-testid.
- Correct use of classes and ids.
- Correct use of the HTML box model.
- Improve the names of classes and ids.
- Add more validations to the forms
- Add error messages to forms


#
### Author

Julián Demeglio
