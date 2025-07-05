
export function haversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const toRad = (x: number) => (x * Math.PI) / 180;

  const R = 6371000; //earth radius in meters
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lng2 - lng1);

  const a =
    Math.sin(Δφ / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; //distance in meters
}

export function filterWithinRadius(
  centerLat: number,
  centerLng: number,
  locations: any[],
  radius: number
) {
  return locations.filter(loc => {
    const dist = haversineDistance(centerLat, centerLng, loc.lat, loc.lng);
    return dist <= radius;
  });
}