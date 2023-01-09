export function changeSlug(name) {
  name = name.toLowerCase();
  name = name.replace(/[^a-z0-9]+/g, "-");
  name = name.replace(/^-+|-+$/g, "");
  return name;
}
