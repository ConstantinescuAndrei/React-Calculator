import React, { useState, useEffect } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";

import "./Calculator.css";

const Calculator = () => {
    const [currentSum, setCurrentSum] = useState(0);
    const [input, setInput] = useState('');
    const [prevSimbol, setPrevSimbol] = useState('');

    const getLastNumber = (numbers) => {
        return (numbers.split(" ") !== 'null') ? numbers.split("+").join(",").split("x").join(",").split("-").join(",").split("/").join(",").split(",") : numbers;
    }

    const calculateSum = (prevSimbol, prevNumber) => {

        console.log(prevNumber);
        console.log(prevSimbol);
        switch(prevSimbol)  {
            case '':
                setCurrentSum(parseInt(prevNumber));
                break;

            case '+':
                setCurrentSum(currentSum + parseInt(prevNumber));
                break;
            
            case '-':
                setCurrentSum(currentSum - parseInt(prevNumber));
                break;

            case 'x':
                setCurrentSum(currentSum * parseInt(prevNumber));
                break;

            case '/':
                setCurrentSum(currentSum / parseInt(prevNumber));
                break;
            
            default:
                console.log('default');
                break;
        }
    }

    const sum = (prevSimbol, numbers) => {
        const newNumber = getLastNumber(numbers);

        const prevNumber = newNumber[newNumber.length - 1];

        calculateSum(prevSimbol, prevNumber);
      
    }

    const showResult = () => {
        setInput(currentSum.toString());
        setCurrentSum(0);
    }

    const buttonPressedHandle = (button) => {
        switch (button) {
            case '+':
                setInput(input + button );
                sum(prevSimbol, input)  
                setPrevSimbol('+');
                break;     
            
            case '-':
                setInput(input + button);
                sum(prevSimbol, input);
                setPrevSimbol('-');
                break;
            
            case 'x':
                setInput(input + button);
                sum(prevSimbol, input);
                setPrevSimbol('x');
                break;

            case '/':
                setInput(input + button);
                sum(prevSimbol, input);
                setPrevSimbol('/');
                break;

            case 'C':
                setInput('');
                setCurrentSum(0);
                break;
            
            case '=':
                showResult();
                break;
            
            default:
                if(input === 0) {
                    setInput(button);
                    break;
                }
                else {
                    setInput(input + '' + button);
                    break;
                }           
        }    
    };

    useEffect(() => {
        console.log("It changed");
        console.log(currentSum);
    }, [currentSum]);

  return (
    <form className={'grid-container'}> 
        <Input value={input} />
        
        <Button name={7} clicked={buttonPressedHandle} />
        <Button name={8} clicked={buttonPressedHandle} />
        <Button name={9} clicked={buttonPressedHandle} />
        <Button name={"x"} clicked={buttonPressedHandle} />
        <Button name={4} clicked={buttonPressedHandle} />
        <Button name={5} clicked={buttonPressedHandle} />
        <Button name={6} clicked={buttonPressedHandle} />
        <Button name={"-"} clicked={buttonPressedHandle} />
        <Button name={1} clicked={buttonPressedHandle} />
        <Button name={2} clicked={buttonPressedHandle} />
        <Button name={3} clicked={buttonPressedHandle} />
        <Button name={"+"} clicked={buttonPressedHandle} />
        <Button name={"C"} clicked={buttonPressedHandle} />
        <Button name={0} clicked={buttonPressedHandle} />
        <Button name={"/"} clicked={buttonPressedHandle} />
        <Button name={"="} clicked={buttonPressedHandle} />           
    </form> 
  );
};

export default Calculator;
