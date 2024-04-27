import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

export async function generatePDF(htmlContent: string) {
  let browser = null;
  try {
    // Launch browser using Puppeteer with chrome-aws-lambda
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true,  // Running headless is recommended in serverless environments
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'a4', printBackground: true });

    return pdfBuffer;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
