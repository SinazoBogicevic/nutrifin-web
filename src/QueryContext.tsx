import {createContext, useContext} from "react"
import {QueryContextType} from "./features/querytypes";

/**
 * provide context with default values
 */

export const QueryContext = createContext<QueryContextType>({
    query: '',
    setQuery: query => console.log(`no search entered`)
})

export const useQuery = () => useContext(QueryContext)