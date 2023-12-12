import React from "react";
import BaseTen from "./BaseTen";

export default function DigitDisplay({operandOne, operandTwo, operation, displayType})
{

    let valueDisplay = null;

    switch(displayType)
    {
        case "BaseTen":
            valueDisplay = <BaseTen operandOne={operandOne} operation={operation} operandTwo={operandTwo} />;
            break;

        case "Hex":
            break;

        case "Binary":
            break;

        default:
            valueDisplay = <BaseTen operandOne={operandOne} operation={operation} operandTwo={operandTwo} />;
    }

    return valueDisplay;
}