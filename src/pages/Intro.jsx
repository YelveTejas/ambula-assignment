import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Intro = () => {
  return (
    <div>
        <Center mt='1cm'>
            <Heading fontFamily='sans-serif'>Hello It's Tejas,</Heading>
        </Center>
      <Box w="80%" margin="auto"  mt="10px" p='10px' boxShadow='md'>
        <Text fontSize='xl'>
          I am a passionate Full Stack Web Developer who recently completed the
          Masai Full Stack web development course. Equipped with a strong
          foundation in JavaScript, React, Redux, Mongoose, Express, Node.js,
          and NPM, I am well-versed in both frontend and backend technologies.
          Throughout my education, I consistently demonstrated academic
          excellence, fueled by my unwavering interest in web development.
          Having successfully completed various group and individual projects, I
          possess hands-on experience in building dynamic and responsive web
          applications. My technical skills as a frontend developer and my
          ability to manage brands effectively have been honed through projects
          I have built. Alongside my technical expertise, I excel in teamwork
          and communication, which have proven instrumental in collaborating
          with diverse teams. My work matters because I strive to create
          exceptional user experiences through my web development projects. By
          leveraging my skills in JavaScript, React, and other technologies, I
          aim to craft visually appealing and user-friendly interfaces that
          captivate and engage audiences. I understand the significance of
          seamless navigation, intuitive design, and optimal performance, which
          contributes to an enhanced user experience. Moving forward, my career
          goal is to contribute to the growth of innovative web development
          projects. I aspire to work with a dynamic team where I can continue to
          learn and expand my skillset. By staying up-to-date with the latest
          industry trends and continuously improving my knowledge, I aim to make
          a lasting impact in the field of web development.
        </Text>
      </Box>
    </div>
  );
};

export default Intro;
