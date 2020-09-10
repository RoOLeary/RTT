import React, { useContext, useState } from "react";

import { TicketContext } from '../contexts/TicketContext';
import TabTitle from './TabTitle';
import TabPanel from './TabPanel';

const Tabs = () => {

    const context = useContext(TicketContext);
    const data = context[0].data;
    let titleOutput,
        panelOutput;

    if(data){
        titleOutput = data.slice(0).reverse().map((d, i) => {
            return(
                <TabTitle key={i} data={d} color="red" idx={i} />
            )
        });

        panelOutput = data.slice(0).reverse().map((d, i) => {
            let groups = d.tickets;
            return(
                <TabPanel label={i} key={i} group={groups} index={i + 1} />
            )
        }); 
    };
    
    return (
        <>
        <div className="flex flex-wrap">
            <div className="w-full">
                <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                    role="tablist"
                >
                    {titleOutput}
                </ul>
                <div className="container my-12 mx-auto px-4 md:px-12">
                    <div className="tab-content tab-space">
                        
                        {panelOutput}
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Tabs;