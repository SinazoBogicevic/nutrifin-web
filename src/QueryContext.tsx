import {createContext, useContext} from "react"


/**
 * created a type 
 */
export type QueryContextType = {
    query: string,
    setQuery: (q: string) => void
}

/**
 * provide context with default values
 */

export const QueryContext = createContext<QueryContextType>({
    query: '',
    setQuery: query => console.log(`no search entered`)
})

export const useQuery = () => useContext(QueryContext)