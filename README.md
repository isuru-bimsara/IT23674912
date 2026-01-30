# 🌍 Swift Translator Automation Suite

This repository contains a **Playwright** automation framework designed to test the transliteration capabilities of the [Swift Translator](https://www.swifttranslator.com/) web platform. It includes 35 automated test cases verified against official project requirements.

---

## 🚀 Installation & Setup

Follow these steps to set up the environment on your local machine.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).
```bash
node --version
```

### 2. Clone the Repository
```bash
git clone git@github.com:isuru-bimsara/IT23674912.git
cd IT23674912
```

### 3. Install Dependencies
#### -Install all node packages
```bash
npm install
```


#### -Install the required browsers
```bash
npx playwright install
```

<br><br>

## 🧪 Running the Tests 
You can run the tests using the following commands:

#### 1. Runs all 35 tests in Headless mode (background).
```bash
npx playwright test
```
#### 2. Runs tests with the Browser window visible.
```bash         
npx playwright test --headed
```
#### 3. Opens the Interactive UI mode for debugging.
```bash
npx playwright test --ui   
```
#### 4. Opens the HTML Test Report after execution.
```bash
npx playwright show-report     
```

<br><br>

## 📁 Project Structure

* tests/ : Contains the automation scripts with 35 test cases.
* playwright.config.js : Global configuration (Base URL, timeouts, etc.).
* README.md : Documentation for the project

📝 Submission Note
The Git repository is publicly accessible for evaluation purposes. All scripts are written in JavaScript using the Playwright test runner.


---



