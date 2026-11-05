/**
 * Resolve a dotted path to a file path
 *
 * @param id - The dotted path
 * @returns The file path
 */
export function resolveDottedPath(id: string): string {
  const parts: string[] = id.split('.')
  if (parts[parts.length - 1] === 'index')
    parts.pop()

  return `/${parts.join('/')}`
}

/**
 * Sort by sort in ascending order
 *
 * @param a - The first item
 * @param a.sort - The sort of the first item
 * @param b - The second item
 * @param b.sort - The sort of the second item
 * @returns The sorted items
 */
export function sortByAsc(a: { sort?: number }, b: { sort?: number }) {
  return (a.sort || 0) - (b.sort || 0)
}
