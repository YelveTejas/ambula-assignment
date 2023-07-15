import React, { useState } from "react";
import { Badge, Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
const Addtocart = () => {
  const [toggle, setToggle] = useState(false);
  const items = JSON.parse(localStorage.getItem("cartitems")) || [];
  
  const remove = (id) => {
    //this function is removing the item by finding index of the item then appltying splice method to remove item
    const itemIndex = items.findIndex((e) => e.id === id);
    if (itemIndex !== -1) {
      items.splice(itemIndex, 1);
      localStorage.setItem("cartitems", JSON.stringify(items));
      setToggle((pre) => !pre);
    }
  };
  // using useEffect to rerender the component as and when we  add the product to cart as we are chaning the toggle value
  useEffect(() => {}, [toggle]);
  return (
    <div>
      <Box w="90%" margin="auto">
        <SimpleGrid columns={[1, 2, 3]} rowGap="10px" columnGap="10px">
          {items.map((e) => (
            <Box padding="10px" boxShadow="md">
              <Image
                w="8cm"
                h="6cm"
                display="block"
                margin="auto"
                src={e.image}
                alt="error"
              ></Image>
              <Box align="left" pt="10px">
                <Text fontSize="xl">Title: {e.title}</Text>
                <Text fontSize="xl">Price: ₹{e.price}</Text>
                <Button size="sm" mt="10px" onClick={() => remove(e.id)}>
                  Remove
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Addtocart;
