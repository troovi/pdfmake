import puppeteer from "puppeteer";

interface Options {
  html: string;
  matchTarget?: string;
  format?: "A4";
  landscape?: boolean;
  scale?: number;
}

interface Sizes {
  width?: number;
  height?: number;
}

export const makePDF = async (opts: Options) => {
  const { html, matchTarget, scale, landscape, format } = opts;

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.setContent(html);

  const sizes: Sizes = await (async () => {
    if (matchTarget) {
      const PrintTarget = await page.waitForSelector(`#${matchTarget}`);

      if (PrintTarget) {
        const dimensions = await PrintTarget.boundingBox();

        if (dimensions) {
          return {
            width: dimensions.width,
            height: dimensions.height,
          };
        }
      }
    }

    return {
      width: undefined,
      height: undefined,
    };
  })();

  const buffer = await page.pdf({
    ...sizes,
    printBackground: true,
    format,
    landscape,
    scale,
  });

  await browser.close();

  return buffer;
};
