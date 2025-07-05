import { fetchGooglePlaces } from './fetch/fetchGooglePlaces';
import { parseXMLFile } from './parseXML';
import fs from 'fs';

async function main() {
  try {
    const googleData = await fetchGooglePlaces('school', 10.762622, 106.660172);

    const xmlData = await parseXMLFile('sample.xml');

    const combined = [...googleData, ...xmlData];

    fs.writeFileSync('.locations.json', JSON.stringify(combined, null, 2));
    console.log('Log combined location data in locations.json');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();