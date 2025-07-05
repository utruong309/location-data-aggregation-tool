import fs from 'fs';
import { parseStringPromise } from 'xml2js';

export async function parseXMLFile(filePath: string) {
  const xml = fs.readFileSync(filePath, 'utf-8');
  const result = await parseStringPromise(xml);

  //structure is <locations><location><name>...</name><lat>...</lat><lng>...</lng></location></locations>
  const locations = result.locations.location.map((loc: any) => ({
    name: loc.name[0],
    lat: parseFloat(loc.lat[0]),
    lng: parseFloat(loc.lng[0]),
    type: loc.type ? loc.type[0] : 'unknown',
    source: 'xml'
  }));

  return locations;
}