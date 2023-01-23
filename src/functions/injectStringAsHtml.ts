import { parse } from "node-html-parser";
export default function injectStringAsHtml(stringToHtml: string) {
  return parse(stringToHtml).structuredText;
}
