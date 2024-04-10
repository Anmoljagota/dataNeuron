import React from "react";
import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Button,
  Avatar,
  AvatarBadge,
  Image,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const ShowOrNot = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex
      justifyContent={"flex-start"}
      background="rgb(63, 60, 66)"
      boxShadow="var(primary-bs)"
      color={"white"}
      fontWeight={"700"}
      p={4}
      w={"100%"}
      borderRadius={5}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        px={!ShowOrNot ? "" : 10}
        w={"100%"}
      >
        {!ShowOrNot && (
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  bg={"none"}
                  border={"none"}
                >
                  <HamburgerIcon color={"white"} />
                </MenuButton>
                <MenuList>
                  <MenuItem bg={"black"} color={"#FFFFFF"}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                    Products
                  </MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                    Members
                  </MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                    Sales
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        )}

        {ShowOrNot && (
          <Image
            src={
              "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/Analytics%20Dashboard/glfxm8pjygdmogygwxpt"
            }
          />
        )}
        <Link to={"/resize"}>
          {" "}
          <Text>First task</Text>
        </Link>
        <Link to={"/crud"}>
          {" "}
          <Text>Second task</Text>
        </Link>
        <HStack>
          <Avatar size="sm" src="https://bit.ly/dan-abramov">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          {ShowOrNot && <Text color={"#9B8C8D"}>Johnson Smith</Text>}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default NavBar;
