
import styled from "styled-components"


const RollDice = ({rolldice,CurrentDice}) => {

   

   
   
  return (
    <DiceContainer>


        <div className="dice "  onClick={rolldice}>
            <img 
           
            src={`/images/dice/dice_${CurrentDice}.png`} alt="dice 1" />
        </div>

        <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    

    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        height: 250px;
        width: 250px;
        border-radius: 10px;
    }

    p{
        font-size: 24px;
        font-weight: 700;
    }


.dice{
    cursor: pointer;
}
@media (max-width: 768px){
    img{width: 200px; height: auto}
    p{font-size:20px}
}

@media (max-width: 420px){
    img{width: 80vw; max-width:180px}
    p{font-size:16px}
}
` 


