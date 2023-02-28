const puppeteer = require('puppeteer');

const URL = process.env.URL || 'https://www.chromestatus.com/features';

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  const response = await page.goto(URL);
  const print_content = await response.text();
  //await print_content.pdf({ path: 'view-source.pdf', format: 'a4' });
  console.log(print_content);
  await browser.close();
});