import React, { useContext } from 'react'; 
import { TicketContext } from '../contexts/TicketContext';
import styled from 'styled-components';

const Button = styled.button`
    background: #0cc;
    color: #fff;
    padding: 10px 20px; 
    border-radius: 5%; 
    margin: 0 auto;
    display: flex;
`;

const listStyle = {
    display: "flex",
    justifyContent: "spaceBetween",
    
};

const PerksPanel = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceBetween",
    boxShadow: "0 2px 8px rgba(0,0,0,.05)"
};


const PerksLink = {
    textAlign: "left",
    color: "#505666",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

const TabPanel = (props) => {
    const context = useContext(TicketContext);
    let tickets = props.group;
    let ticketOutput = Object.entries(tickets).map((ticket, i) => {
        let couchPerks = ticket[1].couchStylePerks; 
        let perks = Object.entries(couchPerks).map((pk, i) => {
            if(pk[1].perkActive){
                return (
                    <li style={PerksLink} key={i}>{pk[1].ticketPerk}</li>
                    
                )
            } else {
                return (
                    <li style={PerksLink} key={i}><strike>{pk[1].ticketPerk}</strike></li>
                )
            }
        });
        
            
        
    return (
        <li className={ "o-grid__col o-grid__col--span6@m o-grid__col--span6@l shadow-lg mr-2" } key={ticket[1].ticketName}> 
            <div className="c-ticketCard--tier3">  
                <header className="c-ticketCard__header">
                    <div className="c-ticketcard__top">
                        <h4 className="c-ticketCard__title align-center p-12"><strong>{ticket[1].ticketName}</strong></h4>
                        <span className="c-ticketCard__desc align-center">
                            <p>{ticket[1].ticketDescription}</p>
                        </span>
                    </div>
                </header>  
                
                <ul className="c-couch-shop__perks align-left" style={ PerksPanel }>
                    {perks}
                </ul>

                <h3>{ticket[1].ticketActualPrice}</h3>
                
                <Button>
                    <a href={ticket[1].ticketButtonLink}>{ticket[1].ticketButtonLabel}</a>
                </Button>
            </div>
        </li>
        );
    }); 

    return(
        <div className={context[1].openTab === props.index ? "block" : "hidden"} id={`link${props.index}`}>
            <ul style={listStyle} className="o-grid">{ticketOutput}</ul>
        </div>
    )
}

export default TabPanel;