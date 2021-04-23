const puppeteer = require('puppeteer')
const fR = require('./formattedReturn')

async function scrapeChannel(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    //scrape text data
    const [el] = await page.$x('/html/body/ytd-app/div/ytd-page-manager/ytd-browse/div[3]/ytd-c4-tabbed-header-renderer/tp-yt-app-header-layout/div/tp-yt-app-header/div[2]/div[2]/div/div[1]/div/div[1]/ytd-channel-name/div/div/yt-formatted-string')
    const text = await el.getProperty('textContent')
    const name = await text.jsonValue()

    //scrape avatar Url
    const [el2] = await page.$x('//*[@id="img"]')
    const src = await el2.getProperty('src')
    const avatarUrl = await src.jsonValue()

    browser.close()

    console.log(name, avatarUrl)
    return {name, avatarUrl}

}


module.exports = {scrapeChannel}





