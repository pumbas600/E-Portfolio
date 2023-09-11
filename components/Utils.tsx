export function generateId(name: string): string {
  return name.replaceAll(' ', '-').toLowerCase();
}
