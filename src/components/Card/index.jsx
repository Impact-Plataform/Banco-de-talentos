import { useApi } from "../../contexts/ApiProvider/index";
import { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart, BsGenderTrans } from 'react-icons/bs';
import { FaBirthdayCake } from "react-icons/fa";
import { ModalInfo } from '../ModalInfo';

export const Card = ({character}) => {

    const { getCharacters } = useApi();

    const [liked, setLiked] = useState(false);

    return ( 
        <Center py={6}>
        <Box
          w={280}
          rounded={'sm'}
          borderRadius={14}
          my={5}
          mx={[0, 5]}
          overflow={'hidden'}
          bg="white"
          border={'1px'}
          borderColor="black"
          boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
          <Box h={'200px'} borderBottom={'1px'} borderColor="black">
            <Img
              src={
                'https://images.unsplash.com/photo-1499749143870-d101b3686e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              }
              roundedTop={'sm'}
              objectFit="cover"
              h="full"
              w="full"
              alt={'Blog Image'}
            />
          </Box>
          <Box p={4}>
          
            <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            {character.name}
            </Heading>
            <Box
              bg={'gray.500'}
              display={'flex'}
              px={0.5}
              py={1}
              color="white"
              mb={2} mt={2}>
                <BsGenderTrans />
              <Text fontSize={'xs'} fontWeight="medium" ml={2}>
                {character.gender !== "n/a" ? (character.gender).toUpperCase() : 'UNKOWN'}
              </Text>
            </Box>
            <Flex alignItems={'center'}>
            <FaBirthdayCake color={'black'}/>
            <Text color={'black'} ml={1} textTransform='uppercase'>{character.birth_year}</Text>
            </Flex>
          </Box>
          <HStack borderTop={'1px'} color="black">
            <Flex
              p={4}
              alignItems="center"
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              cursor={'pointer'}
              w="full">
            <ModalInfo character={character}/>
             
            </Flex>
            <Flex
              p={4}
              alignItems="center"
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              borderLeft={'1px'}
              cursor="pointer"
              onClick={() => setLiked(!liked)}>
              {liked ? (
                <BsHeartFill fill="red" fontSize={'24px'} />
              ) : (
                <BsHeart fontSize={'24px'} />
              )}
            </Flex>
          </HStack>
        </Box>
      </Center>
    )
}