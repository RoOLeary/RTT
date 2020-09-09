import React, { useContext } from 'react'; 
import { TicketContext } from '../contexts/TicketContext';
import styled, { keyframes } from 'styled-components';

const Button = styled.button`
  background: #fff;
  border: 1px solid #000;
  border-radius: 24px;
  padding: 8px 16px;
`;

const TabPanel = (props) => {
    const context = useContext(TicketContext);
    //let drag = props.index - 1;
    let tickets = context[0].data[props.label].tickets;
    let ticketOutput = Object.entries(tickets).map((ticket, i) => {
    
    //    let couchPerks = ticket[1].couchStylePerks; 
        
        return (
            <li key={i}>
                <h3><strong>{ticket[1].ticketName}</strong></h3>
                <p>{ticket[1].ticketDescription}</p>
                
                <ul>
                    <li>Perk</li>                
                    <li>Perk</li>
                </ul>

                <h3>{ticket[1].ticketActualPrice}</h3>
                <Button>
                    <a href={ticket[1].ticketButtonLink}>{ticket[1].ticketButtonLabel}</a>
                </Button>
            </li>
        );
    }); 

    return(
        <div className={context[1].openTab === props.index ? "block" : "hidden"} id={`link${props.index}`}>
            <h1 style={sectionLead}>{context[0].data[props.index - 1].title}</h1>
            <ul style={listStyle}>{ticketOutput}</ul>
        </div>
    )
}


const listStyle = {
    display: "flex",
    justifyContent: "space-around"
};

const sectionLead = {
    fontSize: "20px",
    fontWeight: 600
}


export default TabPanel;