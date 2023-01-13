import styled from 'styled-components';

export const StyledCard = styled.div`
    
    .card {
    position: relative;
    width: 600px;
    height: 390px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    transition: 0.5s;
}

.card .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
}

.card .circle::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 124, 255, 0.699);
    clip-path: circle(120px at center);
    transition: 0.5s;

}

.card .circle:hover:before {
    background: rgba(10, 124, 255, 0.87);
    clip-path: circle(400px at center);
}

.card img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 400px;
    pointer-events: none;
    transition: 0.5s;
}

.card:hover img {
    left: 80%;
    height: 450px;
}

.card .textoabertura {
    position: relative;
    width: 50%;
    left: 20%;
    padding: 20px 20px 20px 40px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
}

.card:hover .textoabertura {

    left: 0;
    opacity: 1;
    visibility: visible;

}

.card .textoabertura h2 {
    color: #fff;
    font-size: 2em;
    line-height: 1em;
    text-transform: uppercase;
}

.botaoExplorar {
    border-color: #0fcbec;
    color: rgb(0, 0, 0);
    background-image: -webkit-linear-gradient(45deg, #0fc4f1 50%, transparent 50%);
    background-image: linear-gradient(45deg, #0f57f1 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 300ms ease-in-out;
}

.botaoExplorar:hover {
    background-position: 0;
}
    `