import styled from 'styled-components';
import sabre from '../../../assets/sabre.png'

export const StyledCardUl = styled.ul`

        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 2rem;
        row-gap: 1rem;

    li{
        display: flex;
        flex-direction: column;
        align-items: center;}

    .card{
            width: 180px;
            height: 250px;
            border-radius: 1rem;
            margin-bottom: 2rem;
            border: solid 3px lightblue;
            transition: box-shadow 0.1s;
            color: whitesmoke;
            background-color: #142374dc;
        }

        .card:hover{
            border: 3px solid #00d9ff;
            color: #00d9ff;
            box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
        }

        span{
            font-weight: bold;
            font-size: 120%;
            text-align: center;
            color: white
        }
        a{
            transition: all 0.3s;
        }
        a:hover{
            transform: scale(1.1);
            
        }

`
