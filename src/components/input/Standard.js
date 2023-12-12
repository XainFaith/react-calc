import React from "react";
import CalcButton from "./CalcButton";

export default function Standard({onInput})
{

    return(
        <div id="InputContainer" className="StandardInput">
            <div className="row">
                <CalcButton symbol="7" onInput={onInput} />
                <CalcButton symbol="8" onInput={onInput} />
                <CalcButton symbol="9" onInput={onInput} />
                <CalcButton symbol="/" onInput={onInput} />
            </div>
            <div className="row">
                <CalcButton symbol="4" onInput={onInput} />
                <CalcButton symbol="5" onInput={onInput} />
                <CalcButton symbol="6" onInput={onInput} />
                <CalcButton symbol="*" onInput={onInput} />
            </div>
            <div className="row">
                <CalcButton symbol="1" onInput={onInput} />
                <CalcButton symbol="2" onInput={onInput} />
                <CalcButton symbol="3" onInput={onInput} />
                <CalcButton symbol="+" onInput={onInput} />
            </div>
            <div className="row">
                <CalcButton symbol="+/-" onInput={onInput} />
                <CalcButton symbol="0" onInput={onInput} />
                <CalcButton symbol="." onInput={onInput} />
                <CalcButton symbol="-" onInput={onInput} />
            </div>
            <div className="row">
                <CalcButton className="BlueButton" symbol="=" inputSymbol="Enter" onInput={onInput} />
            </div>
        </div>
    )
}
