# API Automation
This repository will hold test cases to test various API requests for the Script-Runner website. 

## Getting Started

### Prerequisites

* Install node.js v18.6.0
  ```sh
  https://nodejs.org/en/blog/release/v18.6.0
  ```
* Install npm
  ```sh
  sudo npm install npm --global
  ```
* Install Visual Studio Code
  ```sh
  https://code.visualstudio.com/download
  ```
* Cypress Tutorials (YouTube Playlist)
  ```sh
  https://www.youtube.com/playlist?list=PLFGoYjJG_fqo3DcVuA-YDfyhrxY4ChGqm
  ```

### Installation

1. Clone the repo to VS Code
   ```sh
   https://github.com/shkt99/Appium.git
   ```
2. Open VS Code Terminal and move to directory where you stored Repo
   ```sh
   cd your/project/path
   ```
3. In the root directory, create a new file named ```cypress.env.json``` and add the following contents in the below code block. For local testing, make sure to include your access token between the quotations (do not push your token to GitHub!)

   ```sh
   {
    "accessToken": ""
   }
   ```
4. Install node modules
   ```sh
   npm i
   ```
5. Run Cypress Reporter (option 1 to run tests)
   ```sh
   npm run start
   ```
6. Open Cypress Dashboard (Option 2 to run tests)
   ```sh
   npm run open
   ```
