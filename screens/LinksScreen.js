import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, Alert } from 'react-native';
import { Container, Header, Content, Button, Form, Textarea } from 'native-base';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // text: "",
      // textAreaValue: "",
      gifter: {
        // id: null,

        value: ""
      },
      // stylesSendButton: {},
    }
    this._handleButtonPress = this._handleButtonPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

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
            justifyContent: "center",
          }}>
            <Text>Pride</Text>
          </Button>
          <Button bordered success style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            justifyContent: "center"
          }}>
            <Text>Full-Commitment</Text>
          </Button>
          <Button bordered info style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            justifyContent: "center"
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
          <Textarea rowSpan={4} style={{ margin: 15, fontSize: 15 }} bordered placeholder="コメント（任意）" value={this.state.gifter.value} onChange={this.handleChange} />
        </Form>
        <Button onPress={this._handleButtonPress} style={{
          justifyContent: "center"
        }}>
          <Text style={{
            color: "white"
          }}>バッジ送信</Text>
        </Button>
      </Container>
    );
  }
  // LinksScreen.navigationOptions = {
  //   title: 'Links'
  // }
  _handleButtonPress() {
    alert('An essay was submitted: ' + this.state.gifter.value);
    // Alert.alert(this.state.textAreaValue)
    // this.setState({
    //   // id: null,
    //   // value: 1,
    //   comment: 
    // })
  }
  handleChange(event) {
    this.setState({
      gifter: {
        // id: null,
        value: event.nativeEvent.text
      }
    });
  }
  // onChangeText(e) {
  //   this.state =
  //     {
  //       text: "",
  //       textAreaValue: "e.target.value",
  //       gifter: {
  //         id: null,
  //         value: 0,
  //       }
  //     }
  // }
}

// this.setState(state => ({
//   id: null,
//   value: state.value + 1,
//   comment: null
// }))