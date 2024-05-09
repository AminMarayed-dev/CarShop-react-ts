import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CardType } from "../../type";

function CardItem({ imageURL, name, price, description } : CardType) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={imageURL}
          alt={name}
          borderRadius="lg"
          width={'350px'}
          height={'200px'}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>${price} milions</Text>
          <Text color={"GrayText"} whiteSpace={"nowrap"} fontSize={"small"}>
            {description}
          </Text>
          <Button variant="solid" colorScheme="blue">
            Buy Now
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardItem;
