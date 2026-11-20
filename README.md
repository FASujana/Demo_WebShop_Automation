## Project Overview
This project focuses on UI automation and API testing of the Demo Web Shop website using Playwright, Postman, and Newman.
Website: https://demowebshop.tricentis.com/
## Tools & Technologies
- JavaScript
- Playwright
- Node.js
- Postman
- Newman
- Visual Studio Code
## UI Automation Testing
UI automation was performed using Playwright with the Page Object Model (POM).
### Test Scenarios
1. Invalid Login
2. User Registration and Add Product to Cart
3. Product Search and Checkout
4. Order Confirmation
## Reports
- Playwright HTML Report
- Screenshots and traces for test execution
## API Testing (Postman & Newman)
API Base URL: https://jsonplaceholder.typicode.com
## Test Scenarios
1. GET All Users
- Validate status code 200.
- Verify the response is a non-empty array.
- Verify each user contains ID, name, and email.
- Dynamically save a user ID.

2. GET Single User
- Retrieve a user using the saved user ID.
- Validate status code 200.
- Verify user ID, name, and email.

3. PUT Update User
- Update user name, email, phone, and company name.
- Validate status code 200.
- Verify user ID remains unchanged.
- Verify phone number is not empty.
- Verify updated name.
## Newman Execution

The Postman collection is available in the `api-tests` folder.

Run the collection using:

```bash
npx newman run "./api-tests/Demo_WebShop_API.postman_collection.json"
```

## API Test Results
- Total Requests: 3
- Passed Assertions: 11
- Failed Assertions: 0
- Execution Status: Passed
## Project Structure

```text
Demo_WebShop_Automation/
├── api-tests/
├── data/
├── pages/
├── tests/
├── README.md
├── package.json
└── playwright.config.js
```
## How to Run UI Tests
```bash
npm install
npx playwright install
npx playwright test
```

To view the HTML report:

```bash
npx playwright show-report
```