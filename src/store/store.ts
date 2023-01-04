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