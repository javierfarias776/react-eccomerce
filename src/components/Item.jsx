import { Card, CardBody, CardFooter, Text, Stack, Divider, Heading, Image, Center, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Item = ({id, nombre, marca, stock, image}) => {
  return (
    <>
    <div>
      <div key={id}>
        <Center p="1.5rem">
          <div className='cart'>

          <Card className="card-main">
            <CardBody>
              <Image borderRadius="sm" className='imagen' src={image} />
              <Stack mt="1" spacing="1">
                <Heading size="md">{nombre}</Heading>

                <Text color="blue.800" fontSize="l">
                  Marca: {marca}
                </Text>
                <Text color="red.600" fontSize="l">
                  Stock: {stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/item/${id}`}>Details</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
          </div>
        </Center>
      </div>
    </div>
   

    
   
    </>
  )
}

export default Item