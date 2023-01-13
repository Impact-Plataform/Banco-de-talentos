import styled from 'styled-components';

export const StyledCardUl = styled.ul`

        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 3rem;
        row-gap: 4rem;
        background-color: red;

    li{
        display: flex;
        flex-direction: column;
        align-items: center;}

    .card{
            width: 180px;
            height: 250px;
            border-radius: 1rem;
            margin-bottom: 2rem;
            background-color: yellow;
              
        }

        span{
            font-weight: bold;
            font-size: 120%;
            text-align: center;
        }
        a{
            transition: all 0.3s;
        }
        a:hover{
            transform: scale(1.1);
            
        }

`
