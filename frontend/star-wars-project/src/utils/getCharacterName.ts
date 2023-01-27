type getCharacterNameType = (name: string) => string;

export const getCharacterName: getCharacterNameType = (name): string => {
  const deleteDashs = name.replace("-", " ");
  return deleteDashs;
};
