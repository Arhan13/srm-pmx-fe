import { Box, Flex, Avatar, Text, Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { GoVerified } from "react-icons/go";

import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";
import Summary1 from "../../assets/pmx/summary1.png";
import Summary2 from "../../assets/pmx/summary2.png";
import Summary3 from "../../assets/pmx/summary3.png";

const SubregionsDetails = ({ propertyDetails: {} }) => {
  let subregionOptions = [
    "Cortical White Matter",
    "Thalamus",
    "Caudate",
    "Putamen",
    "Pallidum",
    "Hippocampus",
    "Amygdala",
  ];
  let viewOptions = ["All", "Axial", "Sagittal", "Coronal", "3D"];
  let tissueOptions = ["All", "ICV", "Whole Brain", "White Matter", "CSF"];
  let patientTags = ["Health", "Random1", "Random2", "Random3"];
  let maskFilling = ["Low", "No filing", "Medium", "High", "Very high"];
  let tableData1 = [
    { tissue: "Left", units: "cm3", quantity: "2.96" },
    { tissue: "Right", units: "cm3", quantity: "3.17 " },
  ];
  let tableData2 = [
    { tissue: "Left", units: "%", quantity: "0.22" },
    { tissue: "Right", units: "%", quantity: "0.23" },
  ];

  const photosDummy = [
    {
      id: 1,
      url: Summary1,
    },
    { id: 2, url: Summary2 },
    { id: 3, url: Summary3 },
  ];
  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photosDummy && <ImageScrollbar data={photosDummy} />}
      <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {true && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              {`PATIENT NAME / 20 / Male`}
            </Text>
          </Flex>
        </Flex>
        <Box marginTop="2">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Subregion
            </MenuButton>
            <MenuList>
              {subregionOptions.map((option, index) => (
                <MenuItem key={index}>{option}</MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              marginLeft="4"
            >
              Mask Filling
            </MenuButton>
            <MenuList>
              {maskFilling.map((ele, index) => (
                <MenuItem key={index}>{ele}</MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              marginLeft="4"
            >
              View
            </MenuButton>
            <MenuList>
              {viewOptions.map((ele, index) => (
                <MenuItem key={index}>{ele}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
        <Box marginTop="4" backgroundColor={"whitesmoke"}>
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Volume</Th>
                  <Th>Units</Th>
                  <Td isNumeric>Quantity</Td>
                </Tr>
              </Thead>
              <Tbody>
                {tableData1.map((ele, index) => (
                  <Tr key={index}>
                    <Td>{ele.tissue}</Td>
                    <Td>{ele.units}</Td>
                    <Td isNumeric>{ele.quantity}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Volume</Th>
                  <Th>Units</Th>
                  <Td isNumeric>Quantity</Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
        <Box marginTop="4" backgroundColor={"whitesmoke"}>
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>ICV</Th>
                  <Th>Units</Th>
                  <Td isNumeric>Quantity</Td>
                </Tr>
              </Thead>
              <Tbody>
                {tableData2.map((ele, index) => (
                  <Tr key={index}>
                    <Td>{ele.tissue}</Td>
                    <Td>{ele.units}</Td>
                    <Td isNumeric>{ele.quantity}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>ICV</Th>
                  <Th>Units</Th>
                  <Td isNumeric>Quantity</Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
        <Box marginTop="2">
          <Text fontSize="lg" marginBottom="2" fontWeight="bold">
            {"Lorem ipsum dolor sit amet"}
          </Text>
          <Text lineHeight="2" color="gray.600">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          </Text>
        </Box>
        <Box>
          <Text fontSize="2xl" fontWeight="black" marginTop="5">
            Subregion Tags
          </Text>
          <Flex flexWrap="wrap">
            {patientTags.map((item, index) => (
              <Text
                fontWeight="bold"
                color="blue.400"
                fontSize="l"
                p="2"
                bg="gray.200"
                m="1"
                borderRadius="5"
                key={index}
              >
                {item}
              </Text>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}

export default SubregionsDetails;
