import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Tokenomic() {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="black"
    >
      <Text
        fontFamily={"shojumaru"}
        fontSize={"40px"}
        align={"center"}
        color={"red.600"}
        mt={6}
      >
        Tokenomic
      </Text>
      <Flex
        justifyContent="center"
        alignItems="flex-start"
        flexDirection={{ base: "column", md: "row" }}
        bg="rgba(0, 0, 0, 0.7)"
        p="2rem"
        borderRadius="md"
        boxShadow="lg"
        width="90%"
        maxWidth="1200px"
      >
        {/* Token Details Box */}
        <Box
          bg="rgba(255, 255, 255, 0.1)"
          p="2rem"
          borderRadius="20"
          norder={"1px solid rgba(255, 255, 255, 0.1)"}
          borderColor="red.500"
          m="1rem"
          width={{ base: "100%", md: "412px" }}
          height={{ base: "auto", md: "306px" }}
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          textAlign="center"
        >
          <Heading
            as="h3"
            size="lg"
            color="white"
            borderRadius={"21px"}
            bgGradient="linear(to-l, #F05733,#ED0137)"
            _hover={{ bgGradient: "linear(to-l, #ED0137,#F05733)" }}
            mb="1rem"
            textAlign="center"
            fontFamily={"shojumaru"}
          >
            Token Details
          </Heading>
          <Text fontFamily={"zcool"} color="white">
            <strong>Name:</strong> Saviour
          </Text>
          <Text fontFamily={"zcool"} color="white">
            <strong>Symbol:</strong> SVR
          </Text>
          <Text fontFamily={"zcool"} color="white">
            <strong>Total Supply:</strong> 1000 Trillion
          </Text>
          <Text fontFamily={"zcool"} color="white">
            <strong>Decimals:</strong> 18
          </Text>
        </Box>

        {/* Token Distribution Chart */}
        <Box
         
          flex="2"
          position="relative"
          maxWidth="600px"
          width="100%"
          height="auto"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
            alt="Token Distribution Chart"
            width="380px"
            height="350px"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Tokenomic;
