import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import { GoVerified } from "react-icons/go";
import AvatarImg from "../assets/pmx/avatar.jpg";

const Property = ({ property: { isVerified, externalID } }) => {
  let title =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <Link href={`/summary/${externalID}`} passHref>
      <Flex
        flexWrap="wrap"
        w="420px"
        p="5"
        paddingTop="0"
        justifyContent="flex-start"
        cursor="pointer"
      >
        <Box>
          <Image src={AvatarImg} width="300" height="300" alt="house" />
        </Box>
        <Box w="full">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.400">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                Patient Name / 20 / Male
              </Text>
            </Flex>
          </Flex>

          <Text fontSize="lg">
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
