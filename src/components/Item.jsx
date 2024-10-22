import { Card, CardBody, CardFooter, Text, Stack, Divider, Heading, Image, Center, Button} from '@chakra-ui/react'
const Item = ({id, nombre, precio, stock, image}) => {
  return (
    <>
    <div>
      <div key={id}>
        <Center p="1.5rem">
          <div className='cart'>

          <Card className="card-main">
            <CardBody>
              <Image borderRadius="sm" src={image} />
              <Stack mt="1" spacing="1">
                <Heading size="md">{nombre}</Heading>

                <Text color="blue.800" fontSize="l">
                  Category: {precio}
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
                  <a href="#">Details</a>
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