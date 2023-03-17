import { projects } from "@/lib/projects"
import Link from "next/link"
import ImageWithFallback from "@/components/image-handler";



const fs = require('fs');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromium = require('chromium');
require('chromedriver');

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = false,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'
export async function GetScreenshot({url, name}:{url: string, name: string}) {
  let options = new chrome.Options();
  options.setChromeBinaryPath(chromium.path);
  options.addArguments('--headless');
  options.addArguments('--disable-gpu');
  options.addArguments('--window-size=1280,960');

  const driver = await new webdriver.Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  await driver.get(url);
  await takeScreenshot(driver, name);
  await driver.quit();
};

async function takeScreenshot(driver, name) {
await driver.takeScreenshot().then((data) => {

      fs.writeFileSync(name + '.png', data, 'base64');
      console.log('Screenshot is saved');
  });
}



async function ProjectCard({params}: { params: { 
  url : string,
  name: string,
 }}){
  await GetScreenshot(params)
  const imgsrc = params.name + '.png';
  return(
<div key={params.name} id="project-card" className="flex-col project-card w-64 h-48 hover:scale-105">
                <div className="flex content-center justify-center bg-rosspurple w-full h-full relative shadow-3xl">
                <div className="flex-col items-center content-center justify-center bg-rossblue w-full h-full relative -ml-4 -mt-2 p-5">
                  <div className="flex h-8 -ml-8 -mt-8 ">
                      <div className="flex shrink bg-rosspurple text-white px-2">
                      <Link href={params.url} target="_blank" rel="noopener noreferrer">
                          <h2 className="text-xl uppercase font-bold text-left">{params.name}</h2>
                      </Link>
                      </div>
                  </div>
                  <div className="bg-zinc-50 h-32 overflow-hidden relative mt-3">
                  <ImageWithFallback
                      width={216}
                      height={128}
                      src={`/${imgsrc}`}
                      alt={`${params.url} screenshot`}
                      fallbackSrc={'/images/HRHNY_TheVenueWide2.jpg'}
                      /> 
                  </div>
              </div>
          </div>
      </div>
  )
}

export default async function Projects() {
  return (
<>
      <div className="mx-auto w-full justify-center text-center">
      <div className="w-full 0 py-20">
          <div className="grid grid-cols-0 md:grid-cols-3 gap-10 mx-auto max-w-5xl text-center justify-center">
              {projects.map(projects => (
                  <ProjectCard key={projects.name} params={projects}/>
              ))}
          </div>
      </div>
      </div>
      </>
  )
}
