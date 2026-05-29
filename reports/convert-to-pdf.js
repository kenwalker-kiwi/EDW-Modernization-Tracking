const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const inputArg = process.argv[2];
const defaultBasename = 'sprint-2026.11-status-report';

(async () => {
  const basename = inputArg || defaultBasename;
  const htmlFile = path.join(__dirname, `${basename}.html`);
  const pdfFile = path.join(__dirname, `${basename}.pdf`);

  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    await page.goto(`file://${htmlFile}`, { waitUntil: 'networkidle0' });

    await page.pdf({
      path: pdfFile,
      format: 'Letter',
      landscape: true,
      margin: {
        top: '0.4in',
        right: '0.4in',
        bottom: '0.5in',
        left: '0.4in'
      },
      headerTemplate: '',
      footerTemplate: '<div style="text-align: center; font-size: 10px; color: #999; width: 100%;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
      displayHeaderFooter: true
    });

    await browser.close();

    const fileSize = (fs.statSync(pdfFile).size / 1024).toFixed(2);
    console.log('✓ PDF created successfully');
    console.log(`  Location: ${pdfFile}`);
    console.log(`  Size: ${fileSize} KB`);
  } catch (error) {
    console.error('Error converting to PDF:', error);
    process.exit(1);
  }
})();
