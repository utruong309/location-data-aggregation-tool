export function filterByCategory(locations: any[], category: string) {
    return locations.filter(loc => loc.category === category);
}