type adaptNameToUrlType = (name: string) => string;

export const adaptNameToUrl: adaptNameToUrlType = (name): string => {
  const nameLowerCase = name.toLowerCase();
  const replaceSpaceToDash = nameLowerCase.replace(" ", "_");

  return replaceSpaceToDash;
};
