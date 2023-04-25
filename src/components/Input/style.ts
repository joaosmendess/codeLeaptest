import styled from "styled-components";


export const Container = styled.div `
width: 700px;
height: 290px;
top: 100px;
left: 580px;



display: flex;
flex-direction: column;
border: 1px solid black;
border-radius: 16px;
padding:10px; 
margin: 5px;

>div h3 {
    font: roboto;
    font-weight: 400;
    size: 10px;
    padding: 5px;
 

}

 #text {
    border: 1px solid  #CCCCCC;
    width: 670px;
    height: 32px;
    border-radius: 8px;
    padding: 2px;
   
    
}
#content {
    border: 1px solid  #CCCCCC;
    width: 670px;
    height: 74px;
    border-radius: 8px;
    
::placeholder {
    position: absolute;
    top: 0;
    left: 0;
    padding: 2px;
}
   
}





`;

export const Title = styled.div `
padding: 5px;
`;

export const DivButton = styled.div `
padding: 15px;
display: flex;
justify-content: end;
`;