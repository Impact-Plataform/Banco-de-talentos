import styled from 'styled-components';

export const StyledHeader = styled.header`
    

    width: 100vw;
    height: 20vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 10px;
    row-gap: 1rem;
    align-items: center;
    justify-items: center;
    margin-top: 10px;
    

.botoesAncora {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 35px;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background-color: #142374dc;
    transition: all 0.1s;
}

a{  
    display: flex;
    justify-content: center;
    width: 100%;
    text-decoration: none;
    font-size: larger;
}

i {
    font-size: 135%;
}


.botoesAncora:hover {
    background-position: 0;
    border: 3px solid #00d9ff;
            color: #00d9ff;
            box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
}

@media screen and (max-width: 415px) {

    height: auto;

}

    

`