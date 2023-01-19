import styled from 'styled-components';


export const StyledForm = styled.div`
    
    height: auto;
    width: 100vw;
    form{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;

    }

    input, select {
        background-color: #142374dc;
        color: white;
        border-radius: 5px;
        text-align: center;
        width: ${(props) => props.width ? props.width : '200px'};
        height: ${props => props.height ? props.height : '30px'};
        transition: all 0.1s;
        margin: 5px 5px;
   
    }
   
    input:hover, select:hover{
        
    background-position: 0;
    border: 3px solid #00d9ff;
            color: #00d9ff;
            box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;

    }


`