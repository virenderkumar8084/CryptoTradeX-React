import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} padding={"5"} spacing={"35"}>
        <Button variant={"unstyled"} color={"#d4af37"} fontSize={"xl"}>
          <Link to="/"> 
            Home
          </Link>
        </Button>
        <Button variant={"unstyled"} color={"#d4af37"} fontSize={"xl"}>
          <Link to="/exchanges"> 
            Exchanges
          </Link>
        </Button>
        <Button variant={"unstyled"} color={"#d4af37"} fontSize={"xl"}>
          <Link to="/coins"> 
            Coins
          </Link>
        </Button>
      </HStack>
    </div>
  )
}

export default Header
