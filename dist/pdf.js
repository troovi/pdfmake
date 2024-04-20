"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = exports.generatePDF = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const generatePDF = async (html) => {
    const browser = await puppeteer_1.default.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    const buffer = await page.pdf({
        printBackground: true,
        timeout: 1550,
    });
    await browser.close();
    return buffer;
};
exports.generatePDF = generatePDF;
const t = () => {
    return "DJKJ";
};
exports.t = t;
//# sourceMappingURL=pdf.js.map