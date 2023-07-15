import React from "react";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
const projects = [
    {
      id: 1,
      title: "Blog App",
      link: "https://writestory.netlify.app/",
    },
    {
      id: 2,
      title: "Todo App",
      link: "https://sparkly-sherbet-8b2367.netlify.app/",
    },
    {
      id: 3,
      title: "Tripoto Website",
      link: "https://fabulous-cobbler-459f32.netlify.app/",
    },
  ];
const About = () => {
  return (
    <div>
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          Projects
        </Heading>
        {projects.map((project) => (
          <Box key={project.id} mb={4}>
            <Heading as="h3" size="md">
              {project.title}
            </Heading>
            <Text>
              Visit project:{" "}
              <Link color="blue.500" href={project.link} isExternal>
                {project.link}
              </Link>
            </Text>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default About;
