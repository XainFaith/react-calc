import React from "react";
import CalcButton from "./CalcButton";

export default function CalcButtonBar({onInput})
{

    return(
        <div className="row">
            <CalcButton onInput={onInput} symbol="CE" inputSymbol="Delete" />
            <CalcButton onInput={onInput} symbol="C"  />
            <CalcButton onInput={onInput} symbol="&#x2408;" inputSymbol="Backspace" />
        </div>
    );
}