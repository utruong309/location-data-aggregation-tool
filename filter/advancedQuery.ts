import { filterByCategory } from './filterByCategory';
import { filterWithinRadius } from './filterWithinRadius.ts';

interface NearbyRequirement {
  category: string;
  minCount: number;
}

export function filterByNearbyCriteria(
  locations: any[],
  baseCategory: string,
  requirements: NearbyRequirement[],
  radius = 3000
) {
  const bases = filterByCategory(locations, baseCategory);

  return bases.filter(base => {
    const nearby = filterWithinRadius(base.lat, base.lng, locations, radius);

    return requirements.every(req => {
      const matchCount = nearby.filter(
          (loc: { category: string | string[]; }) => loc.category?.includes(req.category)
      ).length;
      return matchCount >= req.minCount;
    });
  });
}