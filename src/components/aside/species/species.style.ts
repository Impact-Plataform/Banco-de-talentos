'use client'
import styled from 'styled-components';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  chakra
} from '@chakra-ui/react';


export const SpeciesContainer = styled.div`

  h3 {
    margin-left: 10px;
    margin-top: 25px;
    color: #F0A500;
    font-size: 20px;
  }

  ul li {
    list-style: none;
    margin-top: 5px;
    cursor: pointer;
    margin-left: 30px;
    color: white;
  }
  ul li:hover {
    color: #F0A500;
    transition: 0.3s;
  }
`;

export const Container = styled.div`

  .btn-more {
    /* remove styles button */
    background: none;
	  color: inherit;
	  border: none;
	  padding: 0;
	  font: inherit;
	  cursor: pointer;
	  outline: inherit;

    margin-left: 30px;
    color: #F5D9A0;
    font-size: 13px;
  }
  .btn-more:hover {
    color: blueviolet;
  }
`;

export const StyledModal = chakra(ModalContent, {
  baseStyle: {
    background: "#1B1A17",
  },
})

export const Header = chakra(ModalHeader, {
  baseStyle: {
    color: "#F0A500",
  },
})

export const ButtonClose = chakra(ModalCloseButton, {
  baseStyle: {
    color: "#F0A500",
  },
})

export const UlSpecies = styled.ul`
  li {
    list-style: none;
    margin-top: 5px;
    cursor: pointer;
    margin-left: 30px;
    color: white;
  }
  li:hover {
    color: #F0A500;
    transition: 0.3s;
  }
`;