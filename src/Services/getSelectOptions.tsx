// essa função serve para dar capturar o valor de cada option do select
export async function getOptions(setDynamicState: React.Dispatch<React.SetStateAction<any>>, url: any) {
    let nextPage = url;
    let optionsArray = [{value: '', label: 'Select your option'}, { value: 'all', label: 'All' }];
    let hasResults = false;

    while (nextPage) {
        const res = await fetch(nextPage);
        const { next, results } = await res.json();

        // verifica se existem resultados
        if (results && results.length > 0) {
            hasResults = true;

            results.forEach((result: any) =>
                optionsArray.push({
                    value: result.name || result.title,
                    label: result.name || result.title
                })
            );
        }

        // se existem resultados, prossegue, senão, retorna null.
        nextPage = hasResults ? next : null;
    }

    setDynamicState(optionsArray);
}