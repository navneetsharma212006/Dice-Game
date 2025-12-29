
import styled from 'styled-components';


const arrNumber = [1,2,3,4,5,6];




const NumberSelector = ({seterror,error,selectedNumber,setSelectedNumber}) => {

 const numberselectorhandler = (value)=>{

  setSelectedNumber(value)
  seterror("")


 }
  return (

    <NumberSelecterContainer>

      <p className='error'>{error}</p>
    <div  className="flex">
      {arrNumber.map((value,i)=>(
        <Box
        
        isSelected={value==selectedNumber}
        key={i}
        onClick={()=>numberselectorhandler(value) }
        >{value}</Box>
      ))}
    </div>

    <p>Select Number</p>

    </NumberSelecterContainer>
  )
}

export default NumberSelector


const NumberSelecterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;

.flex{
    display: flex;
    gap: 24px;
}

p{
    font-size: 24px;
    font-weight: 700;
}
   
.error{
  color: red;
}

@media (max-width: 768px){
  align-items: center;
  .flex{flex-wrap: wrap; gap: 12px; justify-content: center}
  p{font-size:20px}
}

@media (max-width: 420px){
  .flex{gap:10px}
  p{font-size:18px}
}
    
`
const Box = styled.div`
    
    height: 72px;
    width: 72px;
    border: 2px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=> props.isSelected?"black":"white"};
    color: ${(props)=> !props.isSelected?"black":"white"};
    cursor: pointer;

    @media (max-width: 768px){
      height: 64px; width:64px; font-size:20px;
    }

    @media (max-width: 420px){
      height: 54px; width:54px; font-size:18px;
    }
    
`