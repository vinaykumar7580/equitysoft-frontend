import "../Components/home.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Input,
  Radio,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import Carousel from "../Components/Carousel";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

function Home() {
  return (
    <div className="container">
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"15px 50px"}
        backgroundColor={"black"}
        color="white"
      >
        <Box>
          <Heading className="color" size={"xl"} fontFamily={"serif"}>
            ACADEMIAN
          </Heading>
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

      <Box backgroundColor={"black"} color={"white"}>
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
          <Heading className="color" fontFamily={"serif"} size={"2xl"}>
            Welcome to Academian
          </Heading>
          <Heading size={"lg"} mt={"30px"} fontWeight={"500"}>
            The Most <span className="color">Affordable</span>
          </Heading>
          <Heading size={"lg"} fontWeight={"500"}>
            learning experiance with "The Academian".
          </Heading>
          <Text mt={"20px"} fontSize={"18px"}>
            Our mission is to help people to find the best course online and
            learn with expert anytime, anywhere.
          </Text>
          <Box
            mt={"50px"}
            className="color"
            border={"1px solid orange"}
            p={"5px 30px"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            cursor={"pointer"}
            fontSize={"18px"}
          >
            Explore Courses
          </Box>
        </Box>
      </Box>

      <Box p={"50px 100px"} backgroundColor={"black"} color={"white"}>
        <Box w={"65%"} m={"auto"} mt={"10px"}>
          <Heading className="color" fontFamily={"serif"}>Who we are</Heading>
          <Text mt={"10px"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            ullam eum modi eos ipsum, libero aut placeat sint et repudiandae qui
            minima omnis aperiam delectus necessitatibus facilis maiores,
            ratione tempore?
          </Text>
        </Box>
        <SimpleGrid
          columns={[1, 1, 2, 3]}
          gap={"7%"}
          mt={"80px"}
          p={"0px 50px"}
        >
          <Box>
            <Box
              border={"1px solid black"}
              width={"60px"}
              height={"60px"}
              m={"auto"}
              p="10px"
              borderRadius={"10px"}
              background="linear-gradient(45deg, #8B4513 0%, #FFA500 50%, #8B4513 100%)"
            >
              <Box textAlign={"center"} margin={"auto"} color={"black"} >
                <FaArrowTrendUp size={"40px"} />
              </Box>
            </Box>
            <Text mt={"30px"} fontSize={"18px"} fontWeight={"bold"}>
              Learning Planning
            </Text>
            <Text mt={"20px"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore officia sequi delectus asperiores assumenda enim
              consectetur, voluptatem incidunt!
            </Text>
          </Box>
          <Box>
            <Box
              border={"1px solid black"}
              width={"60px"}
              height={"60px"}
              m={"auto"}
              p="10px"
              borderRadius={"10px"}
              background="linear-gradient(45deg, #8B4513 0%, #FFA500 50%, #8B4513 100%)"
            >
              <Box textAlign={"center"} margin={"auto"} color={"black"}>
                <PiLightbulbFilamentFill size={"40px"} />
              </Box>
            </Box>

            <Text mt={"30px"} fontSize={"18px"} fontWeight={"bold"}>
              New Courses
            </Text>
            <Text mt={"20px"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore officia sequi delectus asperiores assumenda enim
              consectetur, voluptatem incidunt!
            </Text>
          </Box>
          <Box>
            <Box
              border={"1px solid black"}
              width={"60px"}
              height={"60px"}
              m={"auto"}
              p="10px"
              borderRadius={"10px"}
              background="linear-gradient(45deg, #8B4513 0%, #FFA500 50%, #8B4513 100%)"
            >
              <Box textAlign={"center"} margin={"auto"} color={"black"}>
                <CiSearch size={"40px"} />
              </Box>
            </Box>
            <Text mt={"30px"} fontSize={"18px"} fontWeight={"bold"}>
              Advanced Courier
            </Text>
            <Text mt={"20px"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore officia sequi delectus asperiores assumenda enim
              consectetur, voluptatem incidunt!
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <SimpleGrid
        w={"90%"}
        m={"auto"}
        columns={[1, 1, 1, 2]}
        justifyContent={"space-between"}
        alignItems={"start"}
        p={"30px 10px"}
        backgroundColor={"black"}
        color={"white"}
        mt={"50px"}
        
      >
        <Box textAlign={"left"} w={"87%"}>
          <Heading size={"lg"} className="color">An Investment in knowledge pays</Heading>
          <Heading size={"lg"} className="color">the best Interset</Heading>
          <Text mt={"20px"}>
            Lorem ipsum dolor sit amet consectetur. Volutpat quam tortor nunc at
            aliquet. Sed nulla maecenas adipiscing proin. In magna fames
            faucibus quis laoreet vitae eu mi. Egestas elit nunc
          </Text>
          <Box mt={"20px"}>
            <Flex justifyContent={"left"} alignItems={"center"} gap={"20px"}>
              <Radio size="lg" colorScheme="orange">
                Online Learning
              </Radio>
              <Radio size="lg" colorScheme="orange">
                Online Learning
              </Radio>
              <Radio size="lg" colorScheme="orange">
                Online Learning
              </Radio>
            </Flex>
          </Box>
          <Box
            mt={"50px"}
            className="color"
            border={"1px solid orange"}
            p={"5px 30px"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            cursor={"pointer"}
            fontSize={"18px"}
          >
            Discover More
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"20px"}
        >
          <Box w={"50%"}>
            <Box>
              <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </Box>
            <br />
            <Box>
              <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </Box>
          </Box>
          <Box w={"50%"}>
            <img src="https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={2} gap={6} mt={"30px"} backgroundColor={"black"}>
        <Box
          w={"50%"}
          textAlign={"left"}
          marginLeft={"77px"}
          p={"20px 10px"}
          color={"white"}
        >
          <Heading color={"white"} size={"lg"} className="color">What our students have to say</Heading>
          <Text mt={"20px"}>
            Lorem ipsum dolor sit amet consectetur. Volutpat quam tortor nunc at
            aliquet. Sed nulla maecenas adipiscing proin.
          </Text>
        </Box>
        <Box ml={"-250px"} padding={"10px 0px"}>
          <Carousel />
        </Box>
      </SimpleGrid>

      <Box w={"95%"} m={"auto"} mt={"80px"} padding={"10px"} textAlign={"left"} color={"white"}>
          <Heading className="color" size={"xl"} fontFamily={"serif"}>
            ACADEMIAN
          </Heading>
        <SimpleGrid columns={2}>
          <Box>
            <Box pt={"20px"} w={"62%"}>
              <Text>
                Lorem ipsum dolor sit amet consectetur. Volutpat quam tortor
                nunc at aliquet. Sed nulla maecenas adipiscing proin. In magna
                fames faucibus quis laoreet vitae eu mi. Egestas elit nunc
              </Text>

              <Flex
                justifyContent={"left"}
                alignItems={"center"}
                gap={"6px"}
                mt={"10px"}
              >
                <Text>
                  <MdOutlineMail />
                </Text>
                <Text>contact@company.com</Text>
              </Flex>
              <Flex justifyContent={"left"} alignItems={"center"} gap={"6px"}>
                <Text>
                  <FaPhoneAlt />
                </Text>
                <Text>(414) 687 - 5892</Text>
              </Flex>
            </Box>
          </Box>
          <Box>
            <Flex justifyContent={"space-between"} alignItems={"start"}>
              <Box lineHeight={"27px"}>
                <Text fontWeight={"bold"}>Quick Links</Text>
                <Text>
                  <a href="#">About us</a>
                </Text>
                <Text>
                  <a href="#">Contact us</a>
                </Text>
                <Text>
                  <a href="#">Terms & Condition</a>
                </Text>
                <Text>
                  <a href="#">Privacy Policy</a>
                </Text>
              </Box>
              <Box lineHeight={"27px"}>
                <Text fontWeight={"bold"}>Categories</Text>
                <Text>
                  <a href="#">Who we are</a>
                </Text>
                <Text>
                  <a href="#">FAQ</a>
                </Text>
              </Box>
              <Box lineHeight={"27px"}>
                <Text fontWeight={"bold"}>Quick Links</Text>
                <Text>
                  <a href="#">Lorem ipsum dolor</a>
                </Text>
                <Text>
                  <a href="#">Lorem ipsum dolor</a>
                </Text>
                <Text>
                  <a href="#">Lorem ipsum dolor</a>
                </Text>
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>

      <Box mt={"50px"} color={"white"}>
        <hr />
        <SimpleGrid columns={[1, 1, 1, 2]} w={"95%"} m={"auto"} p={"10px"}>
          <Box textAlign={"left"} pt={"4px"}>
            <Text fontSize={"13px"}>2023 Coursy. All rights reserved</Text>
          </Box>
          <Flex justifyContent={"right"} align={"center"} gap={"30px"}>
            <Text>
              <RiFacebookFill />
            </Text>
            <Text>
              <FaInstagram />
            </Text>
            <Text
              backgroundColor={"orange"}
              color={"white"}
              p={"7px"}
              borderRadius={"5px"}
            >
              <FaLinkedinIn />
            </Text>
            <Text>
              <IoLogoTwitter />
            </Text>
            <Text>
              <FaYoutube />
            </Text>
          </Flex>
        </SimpleGrid>
      </Box>
    </div>
  );
}

export default Home;
