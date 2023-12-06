import "../Components/home.css";
import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiLightbulbFilamentFill } from "react-icons/pi";

function Home() {
  return (
    <div>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"20px 50px"}
      >
        <Box>
          <Heading>Logos</Heading>
        </Box>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"50px"}
        >
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"20px"}
          >
            <p>
              <a href="#">HOME</a>
            </p>
            <p>
              <a href="#">WHO WE ARE</a>
            </p>
            <p>
              <a href="#">HELP</a>
            </p>
            <p>
              <a href="#">CONTACT</a>
            </p>
            <Flex justifyContent={"center"} alignItems={"center"} gap={"5px"}>
              <a href="#">ALL COURSES </a>{" "}
              <span>
                <AiFillCaretDown />
              </span>
            </Flex>
            <p>
              <a href="#">
                <CiSearch size={"23px"} />
              </a>
            </p>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Button
              colorScheme="orange"
              variant="solid"
              paddingLeft={"30px"}
              paddingRight={"30px"}
            >
              LOGIN
            </Button>
            <Button
              colorScheme="orange"
              variant="solid"
              paddingLeft={"30px"}
              paddingRight={"30px"}
            >
              SIGNUP
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Box>
        <Box height={"700px"} position={"relative"}>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg"
            alt="poster"
          />
        </Box>
        <Box
          width={"47%"}
          textAlign={"left"}
          color={"white"}
          p={"20px"}
          position={"absolute"}
          top={"280px"}
          left="30px"
        >
          <Heading size={"3xl"}>Welcome to Academian</Heading>
          <Heading size={"lg"} mt={"30px"}>
            The Most <span>Affordable</span>
          </Heading>
          <Heading size={"lg"}>
            learning experiance with" The Academian".
          </Heading>
          <Text mt={"20px"} fontSize={"18px"}>
            Our mission is to help people to find the best course online and
            learn with expert anytime, anywhere.
          </Text>
          <Button mt={"50px"}>Explore Courses</Button>
        </Box>
      </Box>

      <Box p={"50px 100px"}>
        <Box w={"65%"} m={"auto"}>
          <Heading>Who we are</Heading>
          <Text mt={"10px"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            ullam eum modi eos ipsum, libero aut placeat sint et repudiandae qui
            minima omnis aperiam delectus necessitatibus facilis maiores,
            ratione tempore?
          </Text>
        </Box>
        <SimpleGrid columns={[1, 1, 2, 3]} gap={"10%"} mt={"80px"}>
          <Box>
            <Box border={"1px solid black"} width={"60px"} height={"60px"} m={"auto"} p="10px" borderRadius={"10px"}>
                <Box textAlign={"center"} margin={"auto"}>
                  <FaArrowTrendUp size={"40px"}/>
                </Box>
            </Box>
            <Text mt={"30px"} fontSize={"18px"} fontWeight={"bold"}>Learning Planning</Text>
            <Text mt={"20px"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore officia sequi delectus asperiores assumenda enim
              consectetur, voluptatem incidunt!
            </Text>
          </Box>
          <Box>
            
            <Box border={"1px solid black"} width={"60px"} height={"60px"} m={"auto"} p="10px" borderRadius={"10px"}>
                <Box textAlign={"center"} margin={"auto"}>
                  <PiLightbulbFilamentFill size={"40px"}/>
                </Box>
            </Box>
            
            <Text mt={"30px"} fontSize={"18px"} fontWeight={"bold"}>New Courses</Text>
            <Text mt={"20px"} >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore officia sequi delectus asperiores assumenda enim
              consectetur, voluptatem incidunt!
            </Text>
          </Box>
          <Box>
          <Box border={"1px solid black"} width={"60px"} height={"60px"} m={"auto"} p="10px" borderRadius={"10px"}>
                <Box textAlign={"center"} margin={"auto"}>
                  <CiSearch size={"40px"}/>
                </Box>
            </Box>
            <Text mt={"30px"} fontSize={"18px"} fontWeight={"bold"}>Advanced Courier</Text>
            <Text mt={"20px"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore officia sequi delectus asperiores assumenda enim
              consectetur, voluptatem incidunt!
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
}

export default Home;
