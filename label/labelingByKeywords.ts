export function labelCategory(name: string): string {
    const lower = name.toLowerCase();
  
    if (lower.includes('tiểu học')) return 'elementary_school';
    if (lower.includes('thcs') || lower.includes('trung học cơ sở')) return 'middle_school';
    if (lower.includes('thpt') || lower.includes('trung học phổ thông')) return 'high_school';
    if (lower.includes('trường')) return 'school';
    if (lower.includes('bệnh viện') || lower.includes('bv')) return 'hospital';
    if (lower.includes('phổi')) return 'respiratory_hospital';
    if (lower.includes('chung cư') || lower.includes('căn hộ')) return 'residential_building';
    if (lower.includes('mầm non') || lower.includes('mẫu giáo')) return 'kindergarten';
    if (lower.includes('đại học') || lower.includes('university')) return 'university';
  
    return 'other';
}