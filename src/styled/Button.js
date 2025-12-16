import styled from "styled-components";

export const Button = styled.button`
background-color:black;
color:white;
padding : 10px 18px;
border-radius:8px;
min-width:220px;
border:none;
font-size:16px;
border: 1px solid transparent;


&:hover{

cursor:pointer;
background-color:white;
color: black;
border: 1px solid black;
transition: 0.2s ease-in-out;


}

@media (max-width: 768px){
	padding: 9px 14px;
	min-width: 0;
	width: 160px;
	font-size:15px;
}

@media (max-width: 420px){
	width: 90%;
	font-size:14px;
	padding: 8px 12px;
}
`