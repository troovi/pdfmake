/// <reference types="node" />
interface Options {
    html: string;
    matchTarget?: string;
    format?: "A4";
    landscape?: boolean;
    scale?: number;
}
export declare const makePDF: (opts: Options) => Promise<Buffer>;
export {};
