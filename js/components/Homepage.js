import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Left,
  Body,
  Right,
  Title,
  View
} from "native-base";

const HomePage = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Tour AR</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 300, height: 200, justifyContent: "center" }}
            source={require("../res/logo.png")}
          ></Image>
        </View>
        <View>
          <Button block light style={styles.button}>
            <Text>Search</Text>
          </Button>
          <Button block light style={styles.button}>
            <Text>Profile</Text>
          </Button>
          <Button block light style={styles.button}>
            <Text>Create AR</Text>
          </Button>
        </View>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Log Out</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

let styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    justifyContent: "space-around"
  },
  button: { marginTop: 60, marginHorizontal: 50, padding: 40 }
});

export default HomePage;
