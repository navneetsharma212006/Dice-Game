import styled  from "styled-components"

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>


        <h1>{score}</h1>
        <p>Total Score</p>
  
    </ScoreContainer>
     
    
  )
}

export default TotalScore

const ScoreContainer = styled.div`

max-width: 200px;
text-align: center;
    
h1{
    font-size: 100px;
    line-height: 100px;
}

p{
    font-size: 24px;
    font-weight: 500;

}

@media (max-width: 768px){
  h1{font-size:72px; line-height:72px}
  p{font-size:20px}
}

@media (max-width: 420px){
  h1{font-size:48px; line-height:52px}
  p{font-size:16px}
}
`
