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

export default class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
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
              source={require("/Users/EuiHyo_Mi/Desktop/MVP/client/js/components/image.png")}
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
              <Text>Create</Text>
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
  }
}

let styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    justifyContent: "space-around"
  },
  button: { marginTop: 60, marginHorizontal: 50, padding: 40 }
});
