import { fetchGooglePlaces } from './fetch/fetchGooglePlaces';

async function main() {
  const results = await fetchGooglePlaces('school', 10.762622, 106.660172);
  console.log(results);
}

main();
