import { test, expect } from '@playwright/test';
import { exampleDev, exampleProduction } from './example.data';

const devData = {
  url: 'https://pw-practice-dev.playwrightvn.com/',
  title: 'Playwright practice site - Dev environment'
};

const productionData = {
  url: 'https://pw-practice.playwrightvn.com/',
  title: 'Playwright practice site - Học automation test dành cho người chưa có căn bản lập trình'
}

test('test title - cach 10', async ({ page }) => {
  const env = process.env.NGHIA;

  if (env === 'dev') {
    await page.goto("https://pw-practice-dev.playwrightvn.com/");
  } else {
    await page.goto("https://pw-practice.playwrightvn.com/");
  }

  if (env === 'dev') {
    await expect(page.locator("//h1[@class='blog-title']//a")).toHaveText("Playwright practice site - Dev environment");
  } else {
    await expect(page.locator("//h1[@class='blog-title']//a")).toHaveText("Playwright practice site - Học automation test dành cho người chưa có căn bản lập trình");
  }

});

test('test title - cach 11', async ({ page }) => {
  let data;
  const env = process.env.NGHIA;

  if (env === 'dev') {
    data = devData;
  } else {
    data = productionData;
  }


  await page.goto(data.url);
  await expect(page.locator("//h1[@class='blog-title']//a")).toHaveText(data.title);
})

test('@TC100 test title - cach 12', async ({ page }) => {
  let data;
  const env = process.env.NGHIA;

  if (env === 'dev') {
    data = exampleDev;
  } else {
    data = exampleProduction;
  }

  const caseData = data.TC100;
  await page.goto(data.url);
  await expect(page.locator("//h1[@class='blog-title']//a")).toHaveText(data.title);
})