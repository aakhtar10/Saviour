import { Box ,Text } from '@chakra-ui/react'
import React from 'react'

const RoadMap = () => {
  return (
    <div>
        <Box
      className='roadmap'
      backgroundRepeat="no-repeat"
      backgroundSize={["cover", "cover"]}
      backgroundPosition={["-70px center" , "center"]}
      height={["422px", "650px"]}
    >
      <Text align={"center"}
      position={"relative"} top={"64px"} fontSize={["32px","44px"]} fontFamily={"shojumaru"} color={"rgba(237, 1, 55, 1)"
} >RoadMap</Text>
      </Box>
    </div>
  )
}

export default RoadMap

