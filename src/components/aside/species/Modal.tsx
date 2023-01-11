'use client'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../../../contexts/contextProvider';
import { ISpecie } from '../../../types/Species.types';
import { createdIdSpecies } from '../../../utils';
import { UlSpecies } from './species.style';


interface Props {
  species: ISpecie[]
}


export default function ModalCotainer({ species }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleSpecies } = useContext(AppContext);


  const handleSpeciesModal = (target: any, onClose: () => void) => {
    handleSpecies(target)
    onClose()
  }


  return (
    <>
      <Button onClick={onOpen}>Mostrar mais</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Espécies</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UlSpecies>
              { species.map((specie) => (
                <li
                  key={ uuidv4() }
                  id={createdIdSpecies(specie.url)}
                  value={specie.name}
                  onClick={ (e) => handleSpeciesModal(e.target, onClose) }
                  >
                    {specie.name}
                </li>
              )) }
            </UlSpecies>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
