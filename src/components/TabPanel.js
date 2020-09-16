import React, { useContext } from 'react'; 
import { TicketContext } from '../contexts/TicketContext';
import styled from 'styled-components';



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
    alignItems: "center",
    padding: "10px 0 10px 20px"
}

const Price_Links = {
    padding: "10%",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const Price_Overrides = {
    color: "#a7aab2",
    fontSize: "24px",
    padding: "5% 10% 10%",
    margin: "0 auto",
    width: "100%",
    textAlign: "center"
}

const Button = {
    background: "#0cc",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5%", 
    margin: "0 auto",
};

const TabPanel = (props) => {
    const context = useContext(TicketContext);
    let tickets = props.group;
    let ticketOutput = Object.entries(tickets).map((ticket, i) => {
    let couchPerks = ticket[1].couchStylePerks;         
    let perks = Object.entries(couchPerks).map((pk, i) => {
        
        // Yeah come back and clean this shit up 
        if(pk[1].perkActive){
            return (
            <li style={PerksLink} className="c-couch-shop__perk" key={i}>
                {pk[1].ticketPerk}
                
                {/* <div className="tooltip c-perkTip">
                    <i className="fas fa-info-circle"></i>
                    <span className="tooltiptext">Live access to the digital events platform, the talks on 10 stages and chat and polls.</span>
                </div> */}
            </li>
                
            )
        } else {
            return (
                <li style={PerksLink} className="c-couch-shop__perk" key={i}><strike>{pk[1].ticketPerk}</strike></li>
            )
        }
    });

    
    return (
        <li className={ "o-grid__col o-grid__col--span6@m o-grid__col--span6@l shadow-lg mr-2" } key={ticket[1].ticketName}> 
            <div className="c-ticketCard--tier3">  
                <header className="c-ticketCard__header" style={{ padding: "18px 0" }}>
                    <div className="c-ticketcard__top">
                        <h4 className="c-ticketCard__title text-center p-4"><strong>{ticket[1].ticketName}</strong></h4>
                        <span className="c-ticketCard__desc text-center">
                            <p className="px-6">{ticket[1].ticketDescription}</p>
                        </span>
                    </div>
                </header>  
                
                {/* Spit out perks list as we did in Craft */}
                <ul className="c-couch-shop__perks align-left" style={ PerksPanel }>
                    {perks}
                </ul>

                <div className="c-ticketcard__priceAndLinks" style={ Price_Links }>
                    {/* plug the rest of this crap in  */}
                    <span className="c-ticketCard__price align-center c-event-priceOverrides" style={Price_Overrides}>
                        <strike>€299</strike>
                        <span style={{ color: "#f42"}}>€{ticket[1].ticketActualPrice}</span>
                    </span>
                    <div className="ticketButtons c-event-tktBtnOverrides">
                        <a style={Button} target="_blank" rel="nofollow noopener" data-event-category="TNW Conference 2020" data-event-action="Tickets" data-event-label="Business Pass for investors - GET TICKETS" href="https://earlybird.thenextweb.com/tnw-digital/business-pass-investors?code=earlybird200&amp;__hstc=182889145.67c2785710f8f150eae6980bcf814299.1599205399297.1600244260466.1600254830212.24&amp;__hssc=182889145.2.1600254830212&amp;__hsfp=1063909916">
                            {ticket[1].ticketButtonLabel}
                        </a>
                    </div>
                </div>
                
            </div>
        </li>
        );
    }); 

    return(
        <div className={context[1].openTab === props.index ? "block" : "hidden"} id={`link${props.index}`}>
            <ul style={listStyle} className="o-grid">
                {ticketOutput}
            </ul>
        </div>
    )
}

export default TabPanel;