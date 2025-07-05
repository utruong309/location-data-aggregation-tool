import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export async function fetchGooglePlaces(
  keyword: string,
  lat: number,
  lng: number,
  radius: number = 3000
) {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`;
  const response = await axios.get(url, {
    params: {
      key: process.env.GOOGLE_API_KEY,
      location: `${lat},${lng}`,
      radius,
      keyword
    }
  });

  return response.data.results.map((place: any) => ({
    name: place.name,
    lat: place.geometry.location.lat,
    lng: place.geometry.location.lng,
    type: keyword,
    source: 'google'
  }));
}