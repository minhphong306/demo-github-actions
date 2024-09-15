// // Global teardown using option
// async function globalSetup() {
//     console.log('Global teardown here');
// }

// export default globalSetup;

// Global teardown using project
import { test } from '@playwright/test';

test('global teardown', async ({ }) => {
  console.log('Run global teardown here');
});