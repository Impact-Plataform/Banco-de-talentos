export async function getData(setDynamicState: React.Dispatch<React.SetStateAction<any>>, url: any)
{
    let nextPage:any = url;

    let pages:any = 0;

    let dataArray: any = []

    dataArray.push({
        value:'all',
        label: 'All'
    })

    while (nextPage) {
        const res = await fetch(nextPage)

        const { next, results } = await res.json()

        for (let i = 0; i < results.length; i++)
        {

            if (results[i].name)
            {
                dataArray.push({
                    value: results[i].name,
                    label: results[i].name
                })
            }
            else
            {
                dataArray.push({
                    value: results[i].title,
                    label: results[i].title
                })
            }
        }
        
        pages += 1;

        nextPage = next
    }

    setDynamicState(dataArray)

}