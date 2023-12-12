import React, { useState } from "react";

export default function CalcButton({symbol, inputSymbol, onInput, className})
{
    if(className === undefined)
    {
        className = "";
    }

    function handleInput()
    {
        onInput(symbol);
    }

    const inputKey = (inputSymbol == undefined) ? symbol : inputSymbol;

    return(<button className={"CalcButton" + " " + className} onClick={handleInput} inputsymbol={inputKey}>{symbol}</button>);
}