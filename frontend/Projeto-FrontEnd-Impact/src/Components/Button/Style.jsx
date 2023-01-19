import styled from 'styled-components';

export const StyledButton = styled.button`

    
    margin-top: ${props => props.margintop ? props.margintop : "auto"};
    margin-bottom: ${props => props.marginbottom ? props.marginbottom : "auto"};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.width ? props.width : '200px'};
    height: ${props => props.height ? props.height : '30px'};
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    color: ${props => props.color ? props.color : 'white'};
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "#142374dc"};
    transition: all 0.1s;
    border: ${(props) => props.border ? props.border : "none"};
    transition: all 0.1s;
    
    

:hover {
    background-position: 0;
    border: 3px solid #00d9ff;
            color: #00d9ff;
            box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
            transform: scale(1.1);
}



`