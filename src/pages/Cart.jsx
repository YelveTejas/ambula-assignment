import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Badge, Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
const Cart = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // fetching data from api and passing toggle to dependancy so that it will re render the component as and when add tht product to cart
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }, [toggle]);
  console.log(data);

  const addtocart = (e) => {
// storing the data in local storage
    const cartarray = JSON.parse(localStorage.getItem("cartitems")) || [];
    cartarray.push(e);
    localStorage.setItem("cartitems", JSON.stringify(cartarray));
    setToggle((pre) => !pre);
  };
  const items = JSON.parse(localStorage.getItem("cartitems"))?.length;
  return (
    <div>
      <Box w="90%" margin="auto" mt="10px">
        <Link to="/addtocart">
          <Box float="right" display="flex">
            <FiShoppingCart size={26} />:{items}
          </Box>
        </Link>
        <SimpleGrid columns={[1, 2, 3]} rowGap="10px" columnGap="10px">
          {data.map((e) => (
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
                <Button size="sm" mt="10px" onClick={() => addtocart(e)}>
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Cart;
