import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <div>
       <Rulescontainer>
    <h2>

        How to play Dice game
    </h2>

    <div className="text">

        <p>Select any number</p>
        <p>Click on image </p>
        <p>Click on image </p>

        <p>after click on  dice  if selected number is equal to dice
             number you will get same point as dice</p>

             <p>if you get wrong guess then  2 point will be dedcuted</p>
    </div>
   </Rulescontainer>
    </div>
  )
}

export default Rules

const Rulescontainer = styled.div`

max-width: 800px;
margin: 0 auto;
margin-top: 40px;
border-radius: 30px;
border: 2px solid black;

  
background-color: #fbf1f1;
padding: 20px;
h2{
  font-size: 24px;
  font-weight: bold;
}



.text{
  margin-top: 24px;

  
}
`
