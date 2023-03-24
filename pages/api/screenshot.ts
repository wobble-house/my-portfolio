import chrome from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'

export default async function ProjectScreenshots(req, res){
    const browser = await puppeteer.launch({
            args: chrome.args,
            executablePath: '/.cache/puppeteer/chrome/linux-1095492/chrome-linux/chrome',
            headless: true,
          });
    const page = await browser.newPage();
    page.setUserAgent(
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
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
};