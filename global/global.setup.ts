// // Global setup using global-setup options
// async function globalSetup() {
//     console.log('Global setup here');
// }

// export default globalSetup;

// Globalsetup using project dependencies
import { test } from '@playwright/test';

test('global setup', async ({ }) => {
  console.log('Run global setup here');
});