export function getTime(date: Date): string {
  const time = date.toLocaleString('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
  });
  return time;
}
