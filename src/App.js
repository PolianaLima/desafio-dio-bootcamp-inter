import {Container, Content, Row} from "./styles";
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import {useState} from "react";
import {ButtonOperation} from "./components/ButtonOperation";
import {ButtonEquals} from "./components/ButtonEquals";

const App = ()=> {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');

    const handleAddNUmber=(num)=>{
        setCurrentNumber(prev=>`${prev === '0'? '': prev}${num}`)
    }

    const handleOnClear=()=>{
        setCurrentNumber('0')
        setFirstNumber('0')
        setOperation('0')
    }

    const handleSumNumbers=()=>{
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('+')
        }else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum));
        }
    }

    const handleMinusNumbers=()=>{
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setOperation('-')
            setCurrentNumber('0')
        }else {
            const sum = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(sum))
        }
    }

    const handleMultNumbers=()=>{
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('*')
        }else {
            const sum = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(String(sum));
        }
    }

    const handleDivNumbers=()=>{
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('/')
        }else {
            const sum = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(String(sum));
        }
    }

    const handleEqualsNumbers=()=>{
        if(firstNumber !== '0' & operation !== '' && currentNumber !== ''){
            switch (operation){
                case '+':
                    handleSumNumbers();
                    break;
                case '-':
                    handleMinusNumbers()
                    break;
                case '*':
                    handleMultNumbers();
                    break;
                case '/':
                    handleDivNumbers();
                    break;
                default:
                    break;
            }
        }
    }

  return (
    <Container className="App">
      <Content>
          <Input value={currentNumber}/>
          <Row>
              <ButtonEquals label="%" onClick={()=>handleAddNUmber('')}/>
              <ButtonEquals label="CE" onClick={handleOnClear}/>
              <ButtonEquals label="C" onClick={handleOnClear}/>
              <ButtonOperation label="/" onClick={handleDivNumbers}/>
          </Row>
          <Row>
              <Button label="7" onClick={()=>handleAddNUmber('7')}/>
              <Button label="8" onClick={()=>handleAddNUmber('8')}/>
              <Button label="9" onClick={()=>handleAddNUmber('9')}/>
              <ButtonOperation label="x" onClick={handleMultNumbers}/>
          </Row>
          <Row>
              <Button label="4" onClick={()=>handleAddNUmber('4')}/>
              <Button label="5" onClick={()=>handleAddNUmber('5')}/>
              <Button label="6" onClick={()=>handleAddNUmber('6')}/>
              <ButtonOperation label="-" onClick={handleMinusNumbers}/>
          </Row>
          <Row>
              <Button label="1" onClick={()=>handleAddNUmber('1')}/>
              <Button label="2" onClick={()=>handleAddNUmber('2')}/>
              <Button label="3" onClick={()=>handleAddNUmber('3')}/>
              <ButtonOperation label="+" onClick={handleSumNumbers}/>
          </Row>

          <Row>

              <Button label="0" onClick={()=>handleAddNUmber('0')}/>
              <Button label="." onClick={()=>handleAddNUmber(',')}/>
              <ButtonEquals label="=" onClick={handleEqualsNumbers}/>
          </Row>


      </Content>
    </Container>
  );
}

export default App;
