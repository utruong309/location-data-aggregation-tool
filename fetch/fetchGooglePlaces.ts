import axios from 'axios'; 
import dotenv from 'dotenv'; 

dotenv.config(); 

export async function fetchGooglePlaces( 
    keyword: string, 
    lat: number, 
    lng: number, 
    radius = 3000
) {
    const apiKey = process.env.GOOGLE_API_KEY; 
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&keyword=${keyword}&key=${apiKey}`;
    
    const response = await axios.get(url); 
    const results = response.data.results; //results is default property

    return results.map((place: any) => ({
        name: place.name,
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng,
        address: place.vicinity,
        place_id: place.place_id,
        types: place.types,
        source: 'google',
      }));  
}