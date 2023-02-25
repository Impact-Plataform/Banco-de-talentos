import {createClient} from 'redis'

export const client = createClient({
    url: "redis://redis:6379" 
})
