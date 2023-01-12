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
    border-color: #0fcbec;
    color: rgb(255, 255, 255);
    background-image: -webkit-linear-gradient(45deg, #0fcbec 50%, transparent 50%);
    background-image: linear-gradient(45deg, #0fcbec 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 300ms ease-in-out;
}

.botoesAncora:hover {
    background-position: 0;
}

    

`