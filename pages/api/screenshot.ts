import chromium from 'chrome-aws-lambda'
import puppeteer from '../../utils/puppeteer'

export default async function ProjectScreenshots(req, res: null){
  let browser = null;
  try {
    browser = await puppeteer.launch(
      process.env.NODE_ENV === 'production'
        ? {
            args: chromium.args,
            executablePath: await chromium.executablePath,
            headless: chromium.headless,
          }
        : {},
    );
    const page = await browser.newPage();
    page.setUserAgent(
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.50 Safari/537.36',
    );
    await page.setViewport({
      width: 1024,
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
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
  return res
};