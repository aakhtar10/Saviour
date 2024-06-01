import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Intro = () => {
  return (
    <div>
        <Box display={"flex"} 
        justifyContent={"center"} flexDir={"column"} alignItems={"center"}  fontFamily={"zcool"}>

<Heading color={"rgba(237, 1, 55, 1)"} fontFamily={"shojumaru"} h={["38px","52px"]} w={["285px","389px"]} fontSize={["18px", "32px"]} fontWeight={"400"} lineHeight={["38.08px","52.36px"]}>INTRODUCTION</Heading>

        </Box>
    </div>
  )
}

export default Intro