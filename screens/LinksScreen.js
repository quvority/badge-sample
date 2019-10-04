import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, Alert } from 'react-native';
import { Container, Header, Content, Button, Form, Textarea } from 'native-base';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gifter: { employeeNo: "" },
      awardee: { employeeNo: "" },
      badge: {
        type: "",
        comment: ""
      }
    }
    this.handleSendButtonPress = this.handleSendButtonPress.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.postBadge = this.postBadge.bind(this);
    this.handleSelectRespectButtonPress = this.handleSelectRespectButtonPress.bind(this);
    this.handleSelectCollaborationButtonPress = this.handleSelectCollaborationButtonPress.bind(this);
    this.handleSelectChallengeButtonPress = this.handleSelectChallengeButtonPress.bind(this);
    this.handleSelectFull_CommitmentButtonPress = this.handleSelectFull_CommitmentButtonPress.bind(this);
    this.handleSelectPrideButtonPress = this.handleSelectPrideButtonPress.bind(this);
  }

  //Content
  render() {
    return (
      <Container>
        <Text style={{ margin: 15, fontSize: 20 }}> バッジの送り先</Text>
        <Text style={{ margin: 15, fontSize: 15 }}> 送るバッジを１つ選んでください</Text>
        <Button bordered style={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 5,
          borderRadius: 3,
          justifyContent: "center",
        }} onPress={this.handleSelectPrideButtonPress}>
          <Text>Pride</Text>
        </Button>
        <Button bordered success style={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 5,
          justifyContent: "center"
        }} onPress={this.handleSelectFull_CommitmentButtonPress}>
          <Text>Full-Commitment</Text>
        </Button>
        <Button bordered info style={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 5,
          justifyContent: "center"
        }} onPress={this.handleSelectChallengeButtonPress}>
          <Text>Challenge</Text>
        </Button>
        <Button bordered warning style={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 5,
          justifyContent: "center"
        }} onPress={this.handleSelectCollaborationButtonPress}>
          <Text>Collaboration</Text>
        </Button>
        <Button bordered danger style={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 5,
          justifyContent: "center"
        }} onPress={this.handleSelectRespectButtonPress}>
          <Text>Respect</Text>
        </Button>
        <Form>
          <Textarea rowSpan={4} style={{ margin: 15, fontSize: 15 }} bordered placeholder="コメント（任意）" onChange={this.handleCommentChange} />
        </Form>
        <Button onPress={this.handleSendButtonPress} style={{
          justifyContent: "center",
          marginBottom: 100,
        }}>
          <Text style={{
            color: "white"
          }}>バッジ送信</Text>
        </Button>
      </Container>
    );
  }
  //Content 
  // LinksScreen.navigationOptions = {
  //   title: 'Links'
  // }
  handleSelectPrideButtonPress() {
    this.setState({
      gifter: this.state.gifter,
      awardee: this.state.awardee,
      badge: {
        type: "pride",
        comment: this.state.badge.comment
      },
    });
  }
  handleSelectFull_CommitmentButtonPress() {
    this.setState({
      gifter: this.state.gifter,
      awardee: this.state.awardee,
      badge: {
        type: "full-commitment",
        comment: this.state.badge.comment
      }
    });
  }
  handleSelectChallengeButtonPress() {
    this.setState({
      gifter: this.state.gifter,
      awardee: this.state.awardee,
      badge: {
        type: "challenge",
        comment: this.state.badge.comment
      }
    });
  }
  handleSelectCollaborationButtonPress() {
    this.setState({
      gifter: this.state.gifter,
      awardee: this.state.awardee,
      badge: {
        type: "collaboration",
        comment: this.state.badge.comment
      }
    });
  }
  handleSelectRespectButtonPress() {
    this.setState({
      gifter: this.state.gifter,
      awardee: this.state.awardee,
      badge: {
        type: "respect",
        comment: this.state.badge.comment
      }
    });
  }
  handleCommentChange(event) {
    this.setState({
      badge: {
        type: this.state.badge.type,
        comment: event.nativeEvent.text
      }
    });
  }
  handleSendButtonPress() {
    this.postBadge();
    alert(this.state.badge.comment + this.state.badge.type);
    // this.setState({
    //   // id: null,
    //   // comment: 1,
    //   comment: 
    // })
  }

  //Fetch Badge Post
  postBadge() {
    fetch('http://13.115.80.59/ULSBadge/addbadge', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gifter: { employeeNo: "733" },
        awardee: { employeeNo: "621" },
        badge: {
          type: "respect",
          comment: "いつもありがとう"
        }
      }),
    }).catch((error) => {
      alert(error);
    });
  }

  // onChangeText(e) {
  //   this.state =
  //     {
  //       text: "",
  //       gifter: {
  //         id: null,
  //         comment: 0,
  //       }
  //     }
  // }
}