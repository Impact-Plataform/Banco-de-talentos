import styled, {css} from 'styled-components';


interface Props {
  menuVisible: boolean;
}


export const HeaderContainer = styled.header<Props>`
  @media(max-width: 880px) {
    /* justify-content: space-between; */
    .div-header-logo {
      width: 5%;
    }

    .icon-btn-hamburger {
      display: block !important;
      margin-right: 25px;
      font-size: 30px;
      cursor: pointer;
      color: #F0A500;
    }

    .div-header-search {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    input {
      margin-left: -1px !important;
      color: #F0A500;
    }

    img {
      margin-left: 5px !important;
    }
  };

  @media(max-width: 640px) {
    input {
      width: 150px !important;
    }

    .icon-btn-hamburger {
      margin-right: 0px;
    }
  }

  align-items: center;
  border: 2px solid black;
  background: rgb(27, 26, 23);
  height: 83px;
  width: 100vw;
  display: flex;

  .div-header-logo {
    width: 30%;
  }

  .div-header-search {
    width: 70%;
  }

  .link {
    cursor: default;
  }

  img {
    cursor: pointer;
    height: 50px;
    margin-left: 50px;
  }

  input {
    background-color: #9A999833;
    color: #F0A500;
    border-radius: 5px 0px 0px 5px;
    margin-left: 50px;
    margin-top: 1px;
    height: 36px;
    width: 340px;
  }
  input:active {
    border: solid #F0A500;
  }

  .icon-btn-search {
    background-color: #F0A500;
    border-radius: 0px 5px 5px 0px;
    height: 36px;
  }
  .icon-btn-search:hover {
    background-color: #F5D9A0;
  }

  .icon-btn-hamburger {
    display: none;
  }

  .icon-btn-close {
    margin-right: 25px;
    font-size: 20px;
    transition: 1s;
    cursor: pointer;
    color: #F0A500;
  }

  ${({ menuVisible }) => menuVisible && css`
    .icon-btn-hamburger {
      display: none !important;
    }
  `}

  ${({ menuVisible }) => !menuVisible && css`
    .icon-btn-close {
      display: none;
    }
  `}
`;
