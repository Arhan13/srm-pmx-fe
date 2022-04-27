import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Box fontSize="2xl" color="blue.400" fontWeight="bold">
      <Link href="/" paddingLeft="2">
        PMX
      </Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outlined"
          color="red.400"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/lobes/1" passHref>
            <MenuItem icon={<FcAbout />}>Summary</MenuItem>
          </Link>
          <Link href="/lobes/1" passHref>
            <MenuItem icon={<FcAbout />}>Lobes</MenuItem>
          </Link>
          <Link href="/fat/1" passHref>
            <MenuItem icon={<FcAbout />}>Fat</MenuItem>
          </Link>
          <Link href="/subregions/1" passHref>
            <MenuItem icon={<FcAbout />}>Subregions</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
