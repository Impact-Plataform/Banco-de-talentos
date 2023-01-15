import styled from 'styled-components';

export const StyledHeader = styled.header`
    

    width: 100vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;


.botao1,
.botao2,
.botao3,
.botao4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 30px;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    background-color: #142374dc;
}

i {
    font-size: 135%;
}

.botoesAncora {
    
    color: rgb(255, 255, 255);
    background-color: #142374dc;
    transition: all 0.1s;
   
}

.botoesAncora:hover {
    background-position: 0;
    border: 3px solid #00d9ff;
            color: #00d9ff;
            box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
}

    

`