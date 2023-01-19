import styled from "styled-components";

export const StyledDetails = styled.main`

padding: 0 2rem;
margin-top: 10px;

  
  h1 {
    margin: 1rem 0;
    font-size: 120%;
  }

  .main__div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    border-radius: 10px;
    border: 3px solid #00d9ff;
    color: white;
    background-color: #142374dc;
    box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
  }
  figure {
    width: 300px;
    border-radius: 1rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
    
   
   }
   
  


a{
    color: white;
    text-decoration: none;}
a:hover{
  color: lightblue;
}


  img{
    margin-top: 1rem;
    align-items: center;
    width: 420px;
    border-radius: 1rem;
    
  }
  span {
    font-weight: normal;
    font-size: 120%;
    margin-bottom: 1rem;
    line-height: 130%;
  }
 
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    max-width: 50%;
    
    
  }

  li{
    list-style: none;
  }


  @media screen and (max-width: 790px) {

    figure{
 
      padding: 0 0 0 0;
      align-items: center;
      text-align: center;
    }
    .cardG {
        flex-direction: column;
        width: 100%;    
        align-items: center;
    }
    section {
        margin-left: 0;
        max-width: 100%;
        text-align: center;
        align-items: center;
       
    }
    Link{
      display: flex;
      align-items: center;
    }
    img{
      width: 80%;
    }
    }



`