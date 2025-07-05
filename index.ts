import { fetchGooglePlaces } from './fetch/fetchGooglePlaces';
import { parseXMLFile } from './parseXML';
import fs from 'fs';
import { applyLabeling } from './label/labelCategory'; 
import { filterByNearbyCriteria } from './filter/advancedQuery';

async function main() {
  try {
    const googleData = await fetchGooglePlaces('school', 10.762622, 106.660172);
    const xmlData = await parseXMLFile('sample.xml');
    const combined = [...googleData, ...xmlData];
    const labeledData = applyLabeling(combined);

    fs.writeFileSync('locations.json', JSON.stringify(labeledData, null, 2));
    console.log('Successfully put labeled data to locations.json');

    const filtered = filterByNearbyCriteria( //to be updated
      labeledData,
      'school',
      [
        { category: 'hospital', minCount: 1 }
      ]
    );

    fs.writeFileSync('filtered_locations.json', JSON.stringify(filtered, null, 2));
    console.log('Successfully put filtered data to filtered_locations.json');
  } catch (error) {
    console.error('Error:', error);
  }
  
}

main();