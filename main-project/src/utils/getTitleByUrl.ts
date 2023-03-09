import { ContentSchema } from "../contexts/SWContext"

export function getTitleByUrl(url:string, list?:ContentSchema[] ){
  const title = list?.find(item => item.url === url)?.name

  return title
}