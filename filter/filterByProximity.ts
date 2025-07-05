import { haversineDistance } from './filterWithinRadius.ts';

export function filterWithinRadius(
  centerLat: number,
  centerLng: number,
  locations: any[],
  radiusMeters: number
) {
  return locations.filter(loc => {
    const dist = haversineDistance(centerLat, centerLng, loc.lat, loc.lng);
    return dist <= radiusMeters;
  });
}

export function filterByCategory(locations: any[], category: string) {
  return locations.filter(loc => loc.category === category);
}