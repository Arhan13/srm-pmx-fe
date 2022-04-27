import Link from "next/link";
import Image from "next/image";

import { Flex, Box, Text, Button } from "@chakra-ui/react";

import { baseUrl, fetchApi } from "../utils/fetchApi";

import Property from "../components/Property";
import BrainThumbnail from "../assets/pmx/BrainThumbnail.jpeg";
import Thumb1 from "../assets/pmx/thumb1.jpg";
import Thumb2 from "../assets/pmx/thumb2.jpg";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  imageUrl,
  buttonText,
  linkName,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width="500" height="300" alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl">
        <div
          onClick={() => {
            window.open(linkName);
          }}
        >
          {buttonText}
        </div>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box>
      <Banner
        purpose="Title 1"
        title1="Brain Summary"
        desc1="Explore brain summary"
        desc2="and more"
        buttonText="Know More"
        linkName="https://en.wikipedia.org/wiki/Brain#:~:text=A%20brain%20is%20an%20organ,organ%20in%20a%20vertebrate's%20body."
        imageUrl={Thumb1}
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="Title 2"
        title1="Lobes segmentation"
        title2="and more"
        desc1="Explore lobes"
        // desc2="and more"
        linkName="/search?purpose=for-sale"
        imageUrl={Thumb2}
        buttonText="Know More"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
