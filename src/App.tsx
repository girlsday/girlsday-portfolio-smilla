import { useState } from "react";
import "./App.css";
import { Container, MantineProvider, Text, Image, List, Avatar, Flex, Blockquote, Space, Group, Center } from "@mantine/core";
import { Carousel } from '@mantine/carousel';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container bg={"#E7F5FF"} fluid>
        <Container>
          <Space h={50}></Space>
          <Avatar size={200} maw={200} mx="auto" radius="500px" src="/girlsday-portfolio-smilla/GirlsDay-16.jpg" alt="Random image" />
          <Text c=""fw={500} fz={"60px"}>SMILLA</Text>
        </Container>

        <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Group position="center">
      <List ta="start">
            <List.Item>Gitarre</List.Item>
            <List.Item>Fußball</List.Item>
            <List.Item>Malen</List.Item>
          </List>

          <Text fz={"17px"}>Ich habe zwei Hunde und verbringe gerne Zeit mit kreativen Dingen.</Text>
      </Group>

    </Flex>
         
          

     
        <Center>
        <Blockquote my={20} cite="– Smilla">
        Der Weg ist das Ziel
    </Blockquote>
          </Center>  

    
    <Carousel
     
      height={240}
  
      slideGap="md"
      loop
      align="start"
     
    >
      
      <Carousel.Slide><Image height={220} fit="contain" src="/girlsday-portfolio-smilla/Laila und Nala.JPG" alt="Random image" /></Carousel.Slide>
      <Carousel.Slide><Image src="/girlsday-portfolio-smilla/Wasserbild.JPG" alt="Random image" /></Carousel.Slide>
      <Carousel.Slide><Image height={220} fit="contain" src="/girlsday-portfolio-smilla/Laila.jpg" alt="Random image" /></Carousel.Slide>
      {/* ...other slides */}
    </Carousel>

       
     

        
      </Container>
    </MantineProvider>
  );
}

export default App;
