export default function formatDate(date: number, withYear?: boolean): string {
  return new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    ...(withYear && { year: 'numeric' }),
  });
}
