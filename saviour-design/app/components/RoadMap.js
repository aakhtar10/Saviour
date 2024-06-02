import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
function RoadMap() {
  const data = [{
    id: 1,
    title: "Phase 1",
    desc: "Technical Readiness and Smart Contract Audit",
    url: "https://s3-alpha-sig.figma.com/img/4b01/5d0d/f2954eaf00df1cee6eb3039a08679aa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hltJ8oxKc-BHNm~Ai2b3llLxsNkFOxJmnAsCjAs2dVQTC91LuaozbEVZk8krh1gGoubBurKUCjXF7-Bzo1TeYPn60cHSJTnQwXr3ctXW89XfIy6ncCKqCx9Yaej9iMsiO~LP5u6V5cjmKAGLQW1pHU1FrvRPuaLUwKyW28b6vU2lo~PXgJgsPEu0EJa-y9X3pOvfY64HrO9OhHX1IyJZAG7urzn1nwrfVXSAFiaMiu-juyPaVaWyfQFod9wmqa3e3KXEV3PKQgBAK1GlTj3NRwEFbk647tIt3SqBJQRU3x-xZ1026IwKemFWA2ytyUEuoVgcvsqsJVCYe2cC~puDQA__"
  },
  {
    id: 2,
    title: "Phase 2",
    desc: "Increase Liquidity and Trading Volume",
    url: "https://s3-alpha-sig.figma.com/img/aa29/8bb9/151666f4ac7fae86b6b63f7e97472d61?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZAHaJXiBYfL1h1zgGPIaFE0JavKk6hTn3UOSRgYpS-DqHfNvBX1Zohv99pdXvGSRn2E8qKQy3rUrez0ySAOTwPCu3XeZgk4fsGL8xc-81KN5vvTzjWexDRx4NXnfW6PnIzY8nlwaizp7wImuel-p6v~HAj5yNO4QQQyTkK7Qc8qPTfZ-EK74gDlaMRluU1sJfDwiGihGOhxnVIlyEa~FuAzvJpUmuoERPLFnrrHoRktYitrDFOmbzL41UpIIhJ0qoi6HVz8OPWYXNEAHxe46UXL6RMwmFnwsezpMONedZIB5IboMY7i~3eXxbueFbLgi4yD0~NssIKD~vhbXqHoiw__"
  },
  {
    id: 3,
    title: "Phase 3",
    desc: "Community Building and Marketing",
    url: "https://s3-alpha-sig.figma.com/img/6c61/fbae/ca9bd789f6b5490e4ac71b41b57d2d90?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=deGMC5f~w0~00xln7rW-M~I4vAdNYdlG~v03ljqEXM5vXwo-mFNNLrO6ROWf-ObqESq9mGhw4680eWL~FrxfeMRBzjjnLujScKOZNuY0ruIhMZxE8DVwytJsLGVOIPi2VjbZp9yeFdDqQgn-uytKsfqgTajXUeZBl6wgKppPQKKomyDmxFOygvozrF6VnP~RRkR3kBOteAASfT9YL4I2CpTDf0JDtxMe8oc5inu0MB6VGXjfLKDBYH~zFbJwsyt5R25d6EKKUg9LGCrr62YohTQs8xxCTGBir4LBt0TR8ztUGcuc2bn9ZJb1aQtE3WihajEH-4eTsGTS6sGmVa-fhA__"
  },{
    id: 4,
    title: "Phase 4",
    desc: "Ecosystem Expansion and Partnerships",
    url:"https://s3-alpha-sig.figma.com/img/e792/f455/d02fe23b0b95b2461d5ab0db33cfb4b7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FoHmU4eSMr3BrRCqhZU4684944N4vHk3CFWj4zcV~r2Lwras3ip4Q55mWg8jvJaRoiZfA-lXzDxE6zK0s66seFnh4cFV5bkUCf7oxRmwWosNn4InT3~WxIRVJXTruqzwLeK2Kg467xnwbp9B4tOtff46QCteK6wfLR-A2TpQDBKd2dSfGQEwKRBLeZlKdUMt40PuBXlzS4LJm6yE98HrysbllIqXZlFe7dIXoeHkSkDzrWuiTTvKFYS6qqLSBU5P6RgxzCVewvHf69K24gsKLBHBJMJmHqzS0qOYT8j7teh6KaxoLnLef58tI99B9UdGeJQ4l2sygHUmvubcWJMqJw__"
  }

]
  return (
    <>
       <Box
      
      className='roadmap'
      backgroundRepeat="no-repeat"
      backgroundSize={["cover", "cover"]}
      backgroundPosition={["-70px center" , "center"]}
      height={["auto", "650px"]}
    >
        <Text
        pos={"relative"}
          color="rgba(237, 1, 55, 1)"
          align="center"
          p={4}
          fontSize={["30px", "36px", "52px"]}
          fontFamily="shojumaru"
          textAlign="center"
          top={"64px"}
          borderRadius="20px"
          
        >
          Road Map
        </Text>

        <Grid  placeItems={"center"} mt={"100px"}          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} // 4 columns for both, but we'll limit width on small screens
  gap={6}>

  {data.map((item,index)=>{
    return(
      <GridItem  display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      padding="16px"
      color="white" background={`linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url(${item.url})`} key={item.id}  w={['150.06px', '100%' ]} h={["300px","349px"]} borderRadius={"13.17px"} bgSize={"cover"} bgPos={"center"} >
      <Text fontSize={["12.16px", "21.95px"]} fontFamily={"inter"} color="white" alignContent={"baseline"}>{item.title}</Text>
    <Text fontSize={["9.73px","17.56px"]} fontFamily={"manrope"}>{item.desc}</Text>
      </GridItem>
    )
  })}
 
  
</Grid>
       
      </Box>
    </>
  );
}

export default RoadMap;
