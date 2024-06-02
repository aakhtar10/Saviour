"use client";
import { Box, Flex, Grid, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <Box
      bgGradient={"linear(to-t, rgba(3, 4, 5, 1), rgba(18, 1, 1, 1)) "}
      h={"400px"}
      align={"center"}
    >
      <Image
        src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
        w={"200px"}
        alt="Saviour"
      />
      <Text
        bgGradient={"linear(to-t, rgba(255, 0, 42, 1), rgba(114, 0, 5, 1)) "}
        bgClip="text"
        fontSize={"24px"}
        fontWeight={"700"}
        fontFamily={"poppins"}
        mt={"-70px"}
      >
        SITEMAP
      </Text>
      <Flex
        width={"83%"}
        mt={4}
        fontSize={"12px"}
        justify={"center"}
        align={"center"}
        color={"white"}
        flexWrap={"wrap"}
        gap={8}
      >
        {" "}
        <Text>Home</Text>
        <Text>IDO</Text>
        <Text>Tokenomics</Text>
        <Text>Roadmap</Text>
        <Text>Whitepaper</Text>
        <Text>Pledge</Text>
        <Text>NFT</Text>
        <Text>Games</Text>
      </Flex>
      <Flex
        width={"83%"}
        mt={4}
        fontSize={"24px"}
        justify={"center"}
        align={"center"}
        color={"white"}
        flexWrap={"wrap"}
        gap={2}
      >
        <IconButton icon={<FaTwitter />}   color={"red"} bg={"none"} />
        <IconButton icon={<FaTelegram />} color={"red"} bg={"none"} />
        <IconButton icon={<MdEmail />} color={"red"} bg={"none"} />
      </Flex>
    </Box>
  );
}
