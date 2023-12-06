import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../Components/home.css";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box textAlign={"left"} padding={"10px 30px"}>
            <Heading size={"lg"} color={"orange"}>
              "
            </Heading>
            <Text>
              At in pellentesque integer netus enim purus. Tempor nulla porta
              pretium venenatis sem tellus duis. Rhoncus eu lectus interdum
              tellus pellentesque.
            </Text>
            <Flex
              w={"70%"}
              justifyContent={"left"}
              alignItems={"center"}
              gap={"10px"}
              p={"0px 10px"}
              mt={"10px"}
              borderRadius={"120px"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
              <Box w={"40px"} h={"40px"}>
                <img
                  style={{ borderRadius: "150px" }}
                  src="https://tse1.mm.bing.net/th?id=OIP.4T-70Mmpt2V-A8lENYXUEwHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=113"
                  alt=""
                />
              </Box>
              <Box>
                <h3>Narendra Gates</h3>
                <h3 style={{ color: "orange" }}>* * * * *</h3>
              </Box>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box textAlign={"left"} padding={"10px 30px"}>
            <Heading size={"lg"} color={"orange"}>
              "
            </Heading>
            <Text>
              At in pellentesque integer netus enim purus. Tempor nulla porta
              pretium venenatis sem tellus duis. Rhoncus eu lectus interdum
              tellus pellentesque.
            </Text>
            <Flex
              w={"70%"}
              justifyContent={"left"}
              alignItems={"center"}
              gap={"10px"}
              p={"0px 10px"}
              mt={"10px"}
              borderRadius={"120px"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
              <Box w={"40px"} h={"40px"}>
                <img
                  style={{ borderRadius: "150px" }}
                  src="https://tse1.mm.bing.net/th?id=OIP.4T-70Mmpt2V-A8lENYXUEwHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=113"
                  alt=""
                />
              </Box>
              <Box>
                <h3>silvia putriani</h3>
                <h3 style={{ color: "orange" }}>* * * * *</h3>
              </Box>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box textAlign={"left"} padding={"10px 30px"}>
            <Heading size={"lg"} color={"orange"}>
              "
            </Heading>
            <Text>
              At in pellentesque integer netus enim purus. Tempor nulla porta
              pretium venenatis sem tellus duis. Rhoncus eu lectus interdum
              tellus pellentesque.
            </Text>
            <Flex
              w={"70%"}
              justifyContent={"left"}
              alignItems={"center"}
              gap={"10px"}
              p={"0px 10px"}
              mt={"10px"}
              borderRadius={"120px"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
              <Box w={"40px"} h={"40px"}>
                <img
                  style={{ borderRadius: "150px" }}
                  src="https://tse1.mm.bing.net/th?id=OIP.4T-70Mmpt2V-A8lENYXUEwHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=113"
                  alt=""
                />
              </Box>
              <Box>
                <h3>Narendra Gates</h3>
                <h3 style={{ color: "orange" }}>* * * * *</h3>
              </Box>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box textAlign={"left"} padding={"10px 30px"}>
            <Heading size={"lg"} color={"orange"}>
              "
            </Heading>
            <Text>
              At in pellentesque integer netus enim purus. Tempor nulla porta
              pretium venenatis sem tellus duis. Rhoncus eu lectus interdum
              tellus pellentesque.
            </Text>
            <Flex
              w={"70%"}
              justifyContent={"left"}
              alignItems={"center"}
              gap={"10px"}
              p={"0px 10px"}
              mt={"10px"}
              borderRadius={"120px"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
              <Box w={"40px"} h={"40px"}>
                <img
                  style={{ borderRadius: "150px" }}
                  src="https://tse1.mm.bing.net/th?id=OIP.4T-70Mmpt2V-A8lENYXUEwHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=113"
                  alt=""
                />
              </Box>
              <Box>
                <h3>Narendra Gates</h3>
                <h3 style={{ color: "orange" }}>* * * * *</h3>
              </Box>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box textAlign={"left"} padding={"10px 30px"}>
            <Heading size={"lg"} color={"orange"}>
              "
            </Heading>
            <Text>
              At in pellentesque integer netus enim purus. Tempor nulla porta
              pretium venenatis sem tellus duis. Rhoncus eu lectus interdum
              tellus pellentesque.
            </Text>
            <Flex
              w={"70%"}
              justifyContent={"left"}
              alignItems={"center"}
              gap={"10px"}
              p={"0px 10px"}
              mt={"10px"}
              borderRadius={"120px"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
              <Box w={"40px"} h={"40px"}>
                <img
                  style={{ borderRadius: "150px" }}
                  src="https://tse1.mm.bing.net/th?id=OIP.4T-70Mmpt2V-A8lENYXUEwHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=113"
                  alt=""
                />
              </Box>
              <Box>
                <h3>Narendra Gates</h3>
                <h3 style={{ color: "orange" }}>* * * * *</h3>
              </Box>
            </Flex>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
