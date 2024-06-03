"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePDF = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const makePDF = async (opts) => {
    const { html, matchTarget, scale, landscape, format } = opts;
    const browser = await puppeteer_1.default.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(html);
    const sizes = await (async () => {
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
    const buffer = await page.pdf(Object.assign(Object.assign({}, sizes), { printBackground: true, format,
        landscape,
        scale, timeout: 1500 }));
    await browser.close();
    return buffer;
};
exports.makePDF = makePDF;
//# sourceMappingURL=pdf.js.map