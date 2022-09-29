import {createContext, useState} from 'react'


const AppContext = createContext();


// export function AppProvider({children}){
//     return(
//         <AppContext.Provider value={{item: 1}}>
//             {children}
//         </AppContext.Provider>
//     )
// }

export default AppContext;