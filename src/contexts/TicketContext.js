import React, { createContext, useState } from 'react'; 
export const TicketContext = createContext({}); 

export const TicketContextProvider = (props) => {
    let tickets = props.data;
    const [openTab, setOpenTab] = useState(1);
    let value = [tickets, {openTab, setOpenTab} ];
    
    return(
        <TicketContext.Provider value={value}>
            {props.children}
        </TicketContext.Provider>
    );
}


export default TicketContextProvider; 