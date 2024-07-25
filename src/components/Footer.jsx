import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.900"}
      minH={"48"}
      px={"16"}
      py={["13", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} color={"#d4af37"} fontSize={"xl"}>About Us</Text>
          <Text
            fontSize={"md"}
            letterSpacing={"widest"}
            textAlign={["center"]}
                  >
                      <br />
            Experience India's best crypto trading app, <br />offering expert guidance at unbeatable prices.
          </Text>
        </VStack>

        <VStack mr={10}>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text color={"#d4af37"} >Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;