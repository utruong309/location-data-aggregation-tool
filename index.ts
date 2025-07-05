import { fetchGooglePlaces } from './fetch/fetchGooglePlaces';
import { parseXMLFile } from './parseXML';
import fs from 'fs';
import { applyLabeling } from './label/labelCategory'; 

async function main() {
  try {
    const googleData = await fetchGooglePlaces('school', 10.762622, 106.660172);

    const xmlData = await parseXMLFile('sample.xml');

    const combined = [...googleData, ...xmlData];

    const labeled = applyLabeling(combined);

    fs.writeFileSync('.locations.json', JSON.stringify(labeled, null, 2));
    console.log('Log combined location data in locations.json');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();