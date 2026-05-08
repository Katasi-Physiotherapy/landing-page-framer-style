export function toSafeSlug(input: string, maxLen = 120): string {
  const normalized = input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  if (normalized.length <= maxLen) return normalized;

  // Keep it readable and stable (avoid mid-token cuts).
  const trimmed = normalized.slice(0, maxLen).replace(/-+[^-]*$/, '');
  return trimmed || normalized.slice(0, maxLen);
}

