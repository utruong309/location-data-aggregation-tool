import fs from 'fs';
import { parseStringPromise } from 'xml2js';

export async function parseXMLFile(filePath: string) {
  const xmlData = fs.readFileSync(filePath, 'utf-8');
  const result = await parseStringPromise(xmlData);
  // Extract fields like name, lat, lng from result
  return result;
}