import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {server} from "../index"
import { Heading, HStack, Image, VStack, Text} from '@chakra-ui/react'
import { Container } from '@chakra-ui/react';
import Loader from './Loader';
import Errorcomponent from './Errorcomponent';
const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);
  if (error) return <Errorcomponent message={"Error While Fetching Exchanges"} />;
  return (
    <Container maxW={"container.xl"}>
      {loading ? <Loader /> : <>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      }
    </Container>);

}

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack w={"52"} shadow={"lg"} padding={"8"} borderRadius={"lg"} transition={"all 0.5s"} m={"4"} css={{
      "&:hover": {
        transform:"scale(1.1)",
      }
    }}>
      <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchange"} />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>
      <Text noOfLines={1}>
        {name}
      </Text>
    </VStack>
  </a>
);

export default Exchanges;
