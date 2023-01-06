import React from "react";
import { Container, Header } from "./App.style";
//Toast para notificações
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Routes from "./routes";
import { Normalize } from "styled-normalize";
import { Link } from "./App.style";
function App() {
  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header>
        <Link href="/">Home</Link>
      </Header>

      <Routes />

      <Normalize />
    </Container>
  );
}

export default App;
