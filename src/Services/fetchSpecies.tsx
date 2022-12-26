export async function getData(setDynamicState: React.Dispatch<React.SetStateAction<any>>, url: any)
{
    let nextPage = url;
    let dataArray = [{ value:'all', label: 'All' }];

    while (nextPage) {
        const res = await fetch(nextPage);
        const { next, results } = await res.json();

        results.forEach((result: any) =>
            dataArray.push({
                value: result.name || result.title,
                label: result.name || result.title
            })
        );

        nextPage = next;
    }

    setDynamicState(dataArray);
}