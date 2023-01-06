export const storeAllSpecies = async (serviceSpecies: any, setState: any) => {
  let data = [];
  const storeSpecies = JSON.parse(localStorage.getItem('species') as string);
  
  if (storeSpecies === null) {
    const promiseData = await serviceSpecies();
    data = promiseData
  }
  if (data.length > 5) {
    localStorage.setItem('species', JSON.stringify(data));  
  }
  if (storeSpecies !== null) 
    setState(storeSpecies)
}


export const storeAllCharacter = async (serviceSpecies: any, setState: any, setIsLoading: any) => {
  let data = [];
  const storeCharacter = JSON.parse(localStorage.getItem('characters') as string);
  
  if (storeCharacter === null) {
    const promiseData = await serviceSpecies();
    data = promiseData
    setIsLoading(false)
  }
  if (data.length > 80) {
    localStorage.setItem('characters', JSON.stringify(data));  
  }
  if (storeCharacter !== null) 
    setState(storeCharacter)
}