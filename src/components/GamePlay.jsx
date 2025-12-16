import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button } from '../styled/Button'
import Rules from './rules'

const GamePlay = () => {


  const [error,seterror]=useState("")
const [score,setscore]=useState(0);
     const [selectedNumber,setSelectedNumber]= useState();

      const [CurrentDice,setCurrentDice]=useState(1);

      const[showrules,setshowrules]=useState(false);

       const GenerateRandomNumber =(min,max)=>{

    
        return Math.floor(Math.random()*(max-min)+ min);

    }


    const rolldice=()=>{

  if(!selectedNumber){

seterror("Please select a number to roll the dice");
    return;
  }

  
         const randomNumber = GenerateRandomNumber(1,7)

    setCurrentDice((prev)=>randomNumber);


  
    if(selectedNumber===randomNumber){

      setscore((prev)=> prev+randomNumber)
    }

    else{
      setscore(prev=>prev-2)
    }

    setSelectedNumber(undefined)
    }


    const resetscore=()=>{

      setscore(0);
    }
  return (
   <MainContainer>

    <div className="top_section">

        <TotalScore  score={score}/>
<NumberSelector

seterror={seterror}
error={error}
selectedNumber={selectedNumber}
setSelectedNumber={setSelectedNumber}
/>
    </div>

<RollDice

CurrentDice={CurrentDice}
rolldice={rolldice}
/>

<div className="btns">

<Button  onClick={resetscore}>Reset</Button>
<Button  
onClick={

()=> setshowrules(prev=>!prev)
}

>{showrules ? "Hide":"Show"} Rules</Button>
</div>

{showrules && <Rules/>}
    
    
   </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`

.top_section{
display: flex;
justify-content: space-around;
align-items: end;
padding-top: 70px;
gap: 24px;
flex-wrap: wrap;
}

.btns{
  display: flex;
  flex-direction: column;
  justify-content :center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
}
@media (max-width: 768px){
  ${'' }
  .top_section{
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
  }

  .btns{
    flex-direction: row;
    gap: 12px;
    margin-top: 24px;
  }
}

@media (max-width: 420px){
  .btns{flex-direction: column; width:100%;}
}
    
`


