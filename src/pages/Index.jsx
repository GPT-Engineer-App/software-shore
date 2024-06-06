import { Container, Box, Heading, Text, Button, VStack, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to SaaSify
          </Heading>
          <Text fontSize="xl" mb={6}>
            The ultimate solution for managing your business efficiently and effectively.
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Get Started
          </Button>
        </Box>

        {/* Features Section */}
        <Box>
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            Features
          </Heading>
          <HStack spacing={8} justify="center">
            <VStack>
              <Image src="https://images.unsplash.com/photo-1699910618950-ed0b871c7fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMXxlbnwwfHx8fDE3MTc2NTYwOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" />
              <Text fontSize="lg" fontWeight="bold">
                Feature 1
              </Text>
              <Text textAlign="center">Description of feature 1 that highlights its benefits and how it can help the user.</Text>
            </VStack>
            <VStack>
              <Image src="https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMnxlbnwwfHx8fDE3MTc2NTYwOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" />
              <Text fontSize="lg" fontWeight="bold">
                Feature 2
              </Text>
              <Text textAlign="center">Description of feature 2 that highlights its benefits and how it can help the user.</Text>
            </VStack>
            <VStack>
              <Image src="https://images.unsplash.com/photo-1506544777-64cfbe1142df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwM3xlbnwwfHx8fDE3MTc2NTYwOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" />
              <Text fontSize="lg" fontWeight="bold">
                Feature 3
              </Text>
              <Text textAlign="center">Description of feature 3 that highlights its benefits and how it can help the user.</Text>
            </VStack>
          </HStack>
        </Box>

        {/* Call to Action Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h2" size="xl" mb={4}>
            Ready to take your business to the next level?
          </Heading>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Sign Up Now
          </Button>
        </Box>

        {/* Footer Section */}
        <Box textAlign="center" py={4}>
          <HStack spacing={4} justify="center">
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </HStack>
          <Text mt={4}>© 2023 SaaSify. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
