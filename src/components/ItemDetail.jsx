import React from 'react'
import ItemCount from './ItemCount';
import { Card, CardBody, CardFooter, Text, Stack, Divider, Heading, Image, Center, Button} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'


const ItemDetail = ({productos}) => {
    const {id}= useParams();
    const prodFilter = productos.filter((prod)=> prod.id == id);
  return (
    <>
     {prodFilter.map((prod)=>(
      

      <div key={prod.id}>
        <Center p="1.5rem">
          <div className='cart'>

          <Card className="sizeCard ">
            <CardBody>
              <Image borderRadius="sm" src={prod.image} />
              <Stack>
                <Heading size="md">{prod.nombre}</Heading>

                <Text color="blue.800" fontSize="l">
                  Marca:{prod.marca}
                </Text>
                <Text color="red.600" fontSize="l">
                  Stock:{prod.stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <ItemCount
                 stock={prod.stock}
                 
                 />
              </Center>
            </CardFooter>
          </Card>
          </div>
        </Center>
      </div>
    
    
      ))}
    </>
  )
}

export default ItemDetail