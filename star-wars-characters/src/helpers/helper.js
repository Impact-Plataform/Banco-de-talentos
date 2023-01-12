export const toCapitalize = word => {
  word = word.split(' ');
  const newWord = word.map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
  return newWord;
};
