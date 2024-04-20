"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const pdf_1 = require("./pdf");
const app = (0, express_1.default)();
app.use((0, express_1.json)({ limit: "50mb" }));
app.use((0, express_1.urlencoded)({ extended: true, limit: "50mb", parameterLimit: 1000000 }));
app.post("/", async (req, res) => {
    console.log(req.body.source);
    const buffer = await (0, pdf_1.generatePDF)(req.body.source.html);
    res.send(buffer);
});
app.get("/x", (req, res) => {
    res.send((0, pdf_1.t)());
});
app.listen(3000);
//# sourceMappingURL=server.js.map