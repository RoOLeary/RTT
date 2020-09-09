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
                <TabTitle loop={i} data={d} color="red" idx={i} />
            )
        });

        panelOutput = data.slice(0).reverse().map((d, i) => {
            let groups = d.tickets;
            console.log(d.tickets);
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
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            {panelOutput}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Tabs;