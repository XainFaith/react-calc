import React from "react";

export default function BaseTen({operandOne, operandTwo, operation})
{

    let displayValue = "0";

    if(operandOne !== null && operandOne !== undefined)
    {
        displayValue = operandOne;
    }

    if(operation !== null && operation !== undefined)
    {
        displayValue += " " + operation;
    }

    if(operandTwo !== null && operandTwo !== undefined  && operation != null)
    {
        displayValue += " " + operandTwo
    }
    
    return (
        <div id="DigitDisplay"><p>{displayValue}</p></div>
    );
}