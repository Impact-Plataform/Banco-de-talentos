const getCharacters = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const json = await response.json();
  const results = json.results;
  return results;
};

export default getCharacters;
