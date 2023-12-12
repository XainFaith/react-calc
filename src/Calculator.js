import React, { useState } from "react";
import DigitDisplay from "./components/display/DigitDisplay";
import Standard from "./components/input/Standard";
import CalcButtonBar from "./components/input/CalcButtonBar";



export default function Calculator()
{

    const [operandOne, setOperandOne] = useState(0);
    const [operandTwo, setOperandTwo] = useState(null);
    const [operation, setOperation] = useState(null);

    function clearOps()
    {
        setOperandOne(0);
        setOperandTwo(null);
        setOperation(null);
    }

    function sum()
    {
        if(operation !== null || operation !== undefined)
        {
            let numOne = Number(operandOne);
            let numTwo = Number(operandTwo);
            if(!isNaN(numOne) && !isNaN(numTwo))
            {
                let sum = null;

                switch(operation)
                {
                    case "+":
                        sum = numOne + numTwo;
                        clearOps();
                        setOperandOne(sum);
                        return;

                    case "-":
                        sum = numOne - numTwo;
                        clearOps();
                        setOperandOne(sum);
                        return;

                    case "/":
                        sum = numOne / numTwo;
                        if(isNaN(sum))
                        {
                            sum = 0;
                        }

                        clearOps();
                        setOperandOne(sum);
                        return;

                    case "*":
                        sum = numOne * numTwo;
                        clearOps();
                        setOperandOne(sum);
                        return;
                }
            }
        }
    }

    function onInput(symbol)
    {
        switch(symbol)
        {
            case "C":
                setOperandOne(0);
                setOperandTwo(null);
                setOperation(null);
                break;

            case "CE":
                if(operation !== undefined && operation !== null)
                {
                    setOperandTwo(null);
                }
                else
                {
                    setOperandOne(0);
                    setOperandTwo(null);
                    setOperation(null);
                }

                break;

            case "␈":
                if(operation !== null)
                {
                    if(operandTwo != 0 || operandTwo != null)
                    {
                        let newVal = operandTwo.toString().slice(0,-1);
                        if(newVal == undefined || newVal === null)
                        {
                            setOperandTwo(null);
                        }
                        else
                        {
                            setOperandTwo(newVal);
                        }
                    }
                }
                else
                {
                    if(operandOne != 0 || operandOne != null)
                    {
                        let newVal = operandOne.toString().slice(0,-1);
                        if(newVal == undefined || newVal === null || newVal === "")
                        {
                            setOperandOne(0);
                        }
                        else
                        {
                            setOperandOne(newVal);
                        }
                    }
                }
                break;

            case "=":
                sum();
                break;

            case "+":
                if(operandTwo !== undefined && operandTwo !== null && !isNaN(Number(operandTwo)))
                {
                    sum();
                }

                setOperation(symbol);                
                break;

            case "-":
                if(operandTwo !== undefined && operandTwo !== null && !isNaN(Number(operandTwo)))
                {
                    sum();
                }
                setOperation(symbol);
                break;

            case "/":
                if(operandTwo !== undefined && operandTwo !== null && !isNaN(Number(operandTwo)))
                {
                    sum();
                }
                setOperation("/");
                break;

            case "*":
                if(operandTwo !== undefined && operandTwo !== null && !isNaN(Number(operandTwo)))
                {
                    sum();
                }
                setOperation("*");
                break;

            case ".":
                if(operation == null)
                {
                    if(operandOne == 0)
                    {
                        setOperandOne(0 + symbol);
                    }
                    else
                    {
                        setOperandOne(operandOne + symbol);
                    }
                }
                else
                {
                    if(operandTwo == null || operandTwo == 0)
                    {
                        setOperandTwo(0 + symbol);
                    }
                    else
                    {
                        setOperandTwo(operandTwo + symbol);
                    }
                }
                break;

            case "+/-":
                if(operation !== null && operation !== undefined)
                {
                    if(operandTwo !== "0")
                    {
                        if(operandTwo[0] === "-")
                        {
                            let opTwo = operandTwo.toString();
                            setOperandTwo(opTwo.substring(1,opTwo.length - 1));
                        }
                        else{
                            setOperandTwo("-" + operandTwo);
                        }   
                    }
                }
                else
                {
                    if(operandOne !== "0")
                    {
                        if(operandOne[0] === "-")
                        {
                            let opOne = operandOne.toString();
                            setOperandTwo(opOne.substring(1,opOne.length - 1));
                        }
                        else{
                            setOperandOne("-" + operandOne);
                        }   
                    }
                }
                break;

            default: //Ensure the input is a number value
                if(!isNaN(Number(symbol)))
                {
                    if(operation == null)
                    {
                        if(operandOne === 0)
                        {
                            setOperandOne(symbol);
                        }
                        else
                        {
                            setOperandOne(operandOne + symbol);
                        }
                    }
                    else
                    {
                        if(operandTwo == null || operandTwo === 0)
                        {
                            setOperandTwo(symbol);
                        }
                        else
                        {
                            setOperandTwo(operandTwo + symbol);
                        }
                    }
                }
                break;
        }
    }

    return(
        <div id="Calculator">
                <DigitDisplay operandOne={operandOne} operandTwo={operandTwo} operation={operation} displayType="BaseTen" />
                <CalcButtonBar onInput={onInput} />
                <Standard onInput={onInput} />
        </div>
    )
}