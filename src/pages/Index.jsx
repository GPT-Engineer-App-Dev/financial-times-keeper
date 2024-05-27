import { Box, Container, Flex, Heading, HStack, Text, VStack, Link, Spacer } from "@chakra-ui/react";
import { FaNewspaper, FaChartLine, FaCommentDots } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="#fff1e5" color="white" py={4}>
        <Container maxW="container.xl">
          <Heading as="h1" size="xl">Financial Times</Heading>
        </Container>
      </Box>
      <Box bg="#fff1e5" color="white" py={2}>
        <Container maxW="container.xl">
          <HStack spacing={8}>
            <Link href="#top-stories" fontSize="lg">Top Stories</Link>
            <Link href="#market-data" fontSize="lg">Market Data</Link>
            <Link href="#opinion" fontSize="lg">Opinion</Link>
          </HStack>
        </Container>
      </Box>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={16} align="stretch">
          <Box id="top-stories">
            <Heading as="h2" size="lg" mb={4}><FaNewspaper /> Top Stories</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px" bg="#fff1e5">
                <Heading as="h3" size="md">Story 1</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px" bg="#fff1e5">
                <Heading as="h3" size="md">Story 2</Heading>
                <Text mt={2}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </Box>
            </VStack>
          </Box>
          <Box id="market-data">
            <Heading as="h2" size="lg" mb={4}><FaChartLine /> Market Data</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px" bg="#fff1e5">
                <Heading as="h3" size="md">Market Overview</Heading>
                <Text mt={2}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px" bg="#fff1e5">
                <Heading as="h3" size="md">Stock Updates</Heading>
                <Text mt={2}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
              </Box>
            </VStack>
          </Box>
          <Box id="opinion">
            <Heading as="h2" size="lg" mb={4}><FaCommentDots /> Opinion</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px" bg="#fff1e5">
                <Heading as="h3" size="md">Opinion Piece 1</Heading>
                <Text mt={2}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px" bg="#fff1e5">
                <Heading as="h3" size="md">Opinion Piece 2</Heading>
                <Text mt={2}>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;