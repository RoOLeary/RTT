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
    let tickets = props.group;
    let ticketOutput = Object.entries(tickets).map((ticket, i) => {
        let couchPerks = ticket[1].couchStylePerks; 
        let perks = Object.entries(couchPerks).map((pk, i) => {
            if(pk[1].perkActive){
                return (
                    <li key={i}>{pk[1].ticketPerk}</li>
                )
            } else {
                return (
                    <li key={i}><strike>{pk[1].ticketPerk}</strike></li>
                )
            }
        });
        
            
        
    return (
        <li key={i}>
            <h3><strong>{ticket[1].ticketName}</strong></h3>
            <p>{ticket[1].ticketDescription}</p>
            
            <ul>
                {perks}
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