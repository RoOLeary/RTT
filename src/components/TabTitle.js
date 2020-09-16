import React, { useContext } from 'react'; 
import { TicketContext } from '../contexts/TicketContext';


const TabTitle = (props) => {
    
    const context = useContext(TicketContext);
    let { color, idx } = props;

    console.log(color);
    
    return(
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
                className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (context[1].openTab === props.idx+1
                    ? "text-white bg-" + color
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                e.preventDefault();
                    context[1].setOpenTab(idx + 1 );
                }}
                data-toggle="tab"
                href={`#link${props.idx+1}`}
                role="tablist"
            >
                {props.data.title}
            </a>
        </li>
    )
}

export default TabTitle;