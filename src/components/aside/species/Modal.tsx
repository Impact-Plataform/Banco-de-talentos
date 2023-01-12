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
  chakra
} from '@chakra-ui/react';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../../../contexts/contextProvider';
import { ISpecie } from '../../../types/Species.types';
import { createdIdSpecies } from '../../../utils';
import * as ModalStyle from './species.style';


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
    <ModalStyle.Container>
      <Button className="btn-more" onClick={onOpen}>Show more</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalStyle.StyledModal>
          <ModalStyle.Header>Filter by species</ModalStyle.Header>
          <ModalStyle.ButtonClose />
          <ModalBody>
            <ModalStyle.UlSpecies>
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
            </ModalStyle.UlSpecies>
          </ModalBody>
        </ModalStyle.StyledModal>
      </Modal>
    </ModalStyle.Container>
  )
}
