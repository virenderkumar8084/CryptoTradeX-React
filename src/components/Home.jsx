import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (

    <Box bgColor={"blackAlpha.900"} w={"full"} h={"63vh"}>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin-bold"}
        color={"#d4af37"}
      >
        CryptoTradeX
      </Text>
      <motion.div
        style={{
          height: "60vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
        />
      </motion.div>
    </Box>
  );
};

export default Home;