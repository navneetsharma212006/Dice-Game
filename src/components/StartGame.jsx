import styled from 'styled-components'
import { Button } from '../styled/Button'


const StartGame = ( {toggle}) => {
  return (
    <Container>

<div><img src="/images/dices 1.png" alt="" /></div>


<div className='content'>

    <h1>Dice Game</h1>

    
    <Button onClick={toggle}>Play Now</Button>
</div>


    </Container>
  )
}

export default StartGame

const Container = styled.div`
max-width:1180px;
display:flex;
margin:0 auto;
align-items:center;
height:100vh;

.content h1{
font-size:96px;
white-space:nowrap;
}

@media (max-width: 992px){
  .content h1{font-size:64px;}
}

@media (max-width: 600px){
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:20px;
  height:auto;
  padding:40px 20px;

  img{max-width:60%; height:auto;}

  .content h1{font-size:36px; white-space:normal; text-align:center}
}
`




