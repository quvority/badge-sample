import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput } from 'react-native';
import { Container, Header, Content, Button, Form, Textarea } from 'native-base';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      selectedBadge: 0
    }
  }

  // <View style={{ padding: 30 }}>
  render() {
    return (
      <Container>
        <Text style={{ margin: 15, fontSize: 20 }}> バッジを送る人</Text>
        <Text style={{ margin: 15, fontSize: 15 }}> 送るバッジを１つ選んでください</Text>
        <Content>
          <Button bordered style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            borderRadius: 3,
            justifyContent: "center"
          }}>
            <Text>Pride</Text>
          </Button>
          <Button bordered success style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            justifyContent: "center"
            // margin: 0,
          }}>
            <Text>Full-Commitment</Text>
          </Button>
          <Button bordered info style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            justifyContent: "center"
            // flexDirection: 'row'
          }}>
            <Text>Challenge</Text>
          </Button>
          <Button bordered warning style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            justifyContent: "center"
          }}>
            <Text>Collaboration</Text>
          </Button>
          <Button bordered danger style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            justifyContent: "center"
          }}>
            <Text>Respect</Text>
          </Button>
        </Content>
        <Form>
          <Textarea rowSpan={4} style={{ margin: 15, fontSize: 15 }} bordered placeholder="コメント（任意）" />
        </Form>
        <Button style={{
          justifyContent: "center"
        }}>
          <Text style={{
            color: "white"
          }}>バッジ送信</Text>
        </Button>
      </Container>
    );
    LinksScreen.navigationOptions = {
      title: 'Links'
    }
  }
  // <TextInput
  //   style={{ height: 100, margin: 15 }}
  //   placeholder="コメント（任意）"
  //   onChangeText={inputtext => this.setState({ text: inputtext })}
  //   value={this.state.text}
  // />
  // </View>


  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     paddingTop: 15,
  //     backgroundColor: '#fff',
  //   },
  // });

}
