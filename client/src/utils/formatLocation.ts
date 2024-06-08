export default function formatLocation(location: {
  country: string;
  state: string;
  city: string;
}): string {
  if (location.country === 'United States') {
    return `${location.city}, ${location.state}`;
  }
  return `${location.city}, ${location.country}`;
}
