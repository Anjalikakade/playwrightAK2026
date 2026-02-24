import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: 'dialog.spec.ts',

  //retries:1,
  //grep: /@sanity/,  // grepInvert:/@regression/,
  //fuldlyParallel:true,   // to run test case in parallel or serial 
  workers :3,

  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter:'html',
  //reporter: [['html',{open:'always',outputFolder: 'html-report'}]], //report need to save in other folder - html-report
  //reporter:[['html'],['list'],['dot'],['line'],['json',{outputFile:'output.json'}],['junit',{outputFile:'output.xml'}]],
  //reporter:[['list'],['allure-playwright',{outputFolder:'allure-results'}]],

  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    trace: 'on',
    video:'retain-on-failure',
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'], // start browser maximized
    },
  },
});



// export default defineConfig({
//   testDir: './tests',
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('')`. */
//     // baseURL: 'http://localhost:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },

//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://localhost:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });
