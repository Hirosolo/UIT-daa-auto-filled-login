# UIT DAA Auto Login Extension

## Overview

The **UIT DAA Auto Login Extension** is a browser extension designed to assist users in logging in to the UIT DAA portal at:

```
https://daa.uit.edu.vn/
```

The extension automates the login process by filling in credentials and solving the English captcha automatically when the user is not already logged in.

This project is intended for personal and educational use.

---

## Key Features

* Automatic login for the UIT DAA website
* Automatic extraction and submission of the English captcha answer
* Popup user interface with enable/disable toggle
* Two credential handling modes:

  * Browser autofill
  * Locally stored credentials
* Executes only when the user is not logged in
* All data is stored locally in the browser

---

## System Requirements

* Google Chrome or Microsoft Edge (Chromium-based browsers)
* Developer Mode enabled in the browser

---

## Installation Guide

### Step 1: Download the Source Code

1. Open the GitHub repository
2. Click **Code → Download ZIP**
3. Extract the downloaded ZIP file

Expected directory structure:

```
uit-auto-login/
├── manifest.json
├── content.js
├── popup.html
└── popup.js
```

---

### Step 2: Load the Extension in the Browser

1. Open Chrome and navigate to:

   ```
   chrome://extensions
   ```
2. Enable **Developer mode** (top-right corner)
3. Click **Load unpacked**
4. Select the `uit-auto-login` folder

The extension icon should now appear in the browser toolbar.

---

## Usage Instructions

### 1. Open the Extension Popup

Click the extension icon in the browser toolbar to open the popup interface.

---

### 2. Enable Auto Login

Turn on the **Enable Auto Login** switch.

---

### 3. Select Credential Mode

#### Option A: Browser Autofill

* Select **Use browser autofill**
* Ensure your browser has saved your Student ID and password
* The extension will wait for autofill to complete, then handle captcha and form submission

#### Option B: Stored Credentials

* Select **Use stored credentials**
* Enter your:

  * Student ID
  * Password
* Click **Save credentials**

Credentials are stored locally using the browser’s storage system.

---

### 4. Access the UIT DAA Website

Visit:

```
https://daa.uit.edu.vn/
```

The extension behavior is as follows:

* If the page body contains the `logged-in` class, no action is taken
* If the page body contains the `not-logged-in` class, the login process is executed automatically

---

## Functional Workflow

1. Detects login status via `<body>` class
2. Fills Student ID and password based on selected mode
3. Locates the captcha label and extracts the text inside parentheses `( )`
4. Inserts the extracted answer into the captcha input field
5. Submits the login form

---

## Security and Privacy Notice

* All credentials are stored locally in the browser
* No data is transmitted to any external server
* No tracking, analytics, or logging is performed
* Users may disable or remove the extension at any time

---

## Troubleshooting

**The extension does not run**

* Ensure auto login is enabled in the popup
* Confirm you are on the correct website
* Verify that you are logged out

**Captcha is not filled**

* Reload the page
* The website structure may have changed

**Login fails**

* Verify Student ID and password
* Try switching between autofill and stored credential modes

---

## Disclaimer

This extension is not an official product of the University of Information Technology (UIT). Use of this software is at the user’s own discretion and responsibility.

---

## License

This project is licensed under the MIT License.
