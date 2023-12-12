import React from "react";

export default function UtilBar({currentMode, modes, onModeSelect})
{

    const modeOptions = modes.map((mode)=>{
        return <option key={mode} value={mode}>{mode}</option>;
    })

    return(
        <div id="UtilBar">
            <h1>{currentMode}</h1>
            <div id="ModeSelectorContainer">
                <h3>Mode:&nbsp;</h3>
                <div id="ModeSelector">
                    <select onChange={onModeSelect}>
                        {modeOptions}
                    </select>
                </div>
            </div>
        </div>
    );
}