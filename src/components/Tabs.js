import React, { useContext } from "react";
import { TicketContext } from '../contexts/TicketContext';
import TabTitle from './TabTitle';
import TabPanel from './TabPanel';


import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Tabs = (props) => {

    const context = useContext(TicketContext);
    const data = context[0].data;
    let titleOutput,
        panelOutput;

    if(data){
        titleOutput = data.slice(0).reverse().map((d, i) => {
            return(
                <TabTitle key={i} data={d} color={props.color} idx={i} />
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
        <Container>
            <div className="flex flex-wrap flex-col">
                <ul className="flex mb-0 list-none pt-3 pb-4 mx-auto">
                    {titleOutput}
                </ul>
                <div className="container my-12 mx-auto">
                    <div className="tab-content tab-space">
                        {panelOutput}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Tabs;