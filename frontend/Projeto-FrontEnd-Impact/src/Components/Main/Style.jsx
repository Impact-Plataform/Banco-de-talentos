import styled from 'styled-components';

export const StyledMain = styled.main`
    
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: row;

.nave {
    margin-right: 10px;
    width: 25%;
    height: 70%;
    animation: floaty 1s infinite alternate;

}

@keyframes floaty {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(20px);
    }
}
 

`