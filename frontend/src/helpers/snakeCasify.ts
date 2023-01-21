export function snakeCasify(string: string) {
  return `/${string.replace(' ', '-').toLocaleLowerCase()}`;
}
