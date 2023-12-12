import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./app.js"

const container = document.getElementById('app');

const root = createRoot(container);

document.body.addEventListener("keyup", (keyEvent)=>
{

    let calcButtons = document.getElementsByClassName("CalcButton");
    for (let i = 0; i < calcButtons.length; i++) 
    {
        let element = calcButtons.item(i);
        if(element.getAttribute("inputsymbol") === keyEvent.key)
        {
            element.click();
            
            if(!element.classList.contains("CalcButtonPressed"))
            {
                element.classList.toggle("CalcButtonPressed");
                setTimeout(()=>{
                    element.classList.toggle("CalcButtonPressed");
                },250);
            }
            element.blur();
            return;
        }
    }
});

root.render(<React.StrictMode><App/></React.StrictMode>);