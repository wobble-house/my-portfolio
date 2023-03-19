
import puppeteer from '../../utils/puppeteer';
import chrome from 'chrome-aws-lambda';

export default async (req, res) => {
  try {
    const browser = await puppeteer.launch(
      process.env.NODE_ENV === 'production'
        ? {
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless,
          }
        : {},
    );
    const page = await browser.newPage();
    page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:86.0) Gecko/20100101 Firefox/86.0',
    );
    await page.setViewport({
      width: 1366,
      height: 768,
    });

    await page.goto(req.query.url || 'https://amazon.com');
    const screenshot = await page.screenshot({
      encoding: 'base64',
    });

    await browser.close();
    res.json({ blob: `data:image/jpeg;base64,${screenshot}` });
  } catch (error) {
    console.log(error);
  }
};