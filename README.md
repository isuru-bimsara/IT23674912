Swift Translator Automation Project
This repository contains a comprehensive Playwright automation suite designed to verify the transliteration accuracy of the Swift Translator web application. The project includes 35 distinct functional test cases covering various linguistic scenarios including short phrases, compound sentences, and technical terminology.

🚀 Getting Started
Follow these instructions to set up the project locally and execute the test suite.

📋 Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js: Version 16 or higher (Recommend latest LTS).

npm: (Comes bundled with Node.js).

Git: To clone the repository.

🛠️ Installation
Clone the Repository (If you haven't already):

Bash
git clone <your-repository-url>
cd <project-folder-name>
Install Dependencies: Run the following command to install the required packages (Playwright and its browsers):

Bash
npm install
Install Playwright Browsers:

Bash
npx playwright install
🧪 Running the Tests
You can execute the tests in different modes depending on your preference.

1. Run All Tests (Headless)
This is the default mode. It runs the tests in the background without opening a browser window.

Bash
npx playwright test
2. Run Tests with Browser UI (Headed)
If you want to watch the automation interact with the website in real-time:

Bash
npx playwright test --headed
3. Run a Specific Test File
Bash
npx playwright test tests/swiftTranslator.spec.js
4. Open Playwright UI Mode
This provides a rich interface for debugging and stepping through each test case:

Bash
npx playwright test --ui
📊 Viewing Test Reports
After the tests complete, Playwright automatically generates a detailed HTML report. To view it, run:

Bash
npx playwright show-report
📁 Project Structure
tests/: Contains the .spec.js file with all 35 test cases.

playwright.config.js: The main configuration file for Playwright (browser settings, timeouts, etc.).

package.json: Contains project dependencies and scripts.

⚠️ Important Note for Markers
Public Accessibility: This repository is set to Public. If you encounter any access issues, please contact the repository owner immediately.

Timeouts: The tests include a 3000ms wait time per conversion to ensure the web application has processed the Singlish-to-Sinhala transliteration correctly.
