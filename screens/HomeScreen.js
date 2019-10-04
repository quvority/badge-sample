import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Container, Header, Content, List, ListItem, Left, Right, Icon, Button, Input, Label, Body, Form, Item } from 'native-base';


export default class ListItemSelectedExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personList:[],
      person:{
        firstNameKana: "",
        lastName: "",
        firstName: "",
        department: "",
        employeeNo: "",
        pride: null,
        fullCommitment: null,
        challenge: null,
        collaboration: null,
        respect: null,
        totalBadge: "",
        lastNameKana:""
      },
      gifterList: [
        {
          gifterName: "桑原",
          pride: 5,
          fullCommitment: 2,
          challenge: 1,
          collaboration: 0,
          respect: 1  
        },
        {
          gifterName: "穐田",
          pride: 9,
          fullCommitment: 5,
          challenge: 1,
          collaboration: 3,
          respect: 1  
        },
        {
          gifterName: "滝口",
          pride: 9,
          fullCommitment: 5,
          challenge: 1,
          collaboration: 3,
          respect: 1  
        },
        {
          gifterName: "毛屋",
          pride: 9,
          fullCommitment: 5,
          challenge: 1,
          collaboration: 3,
          respect: 1  
        },
        {
          gifterName: "安部",
          pride: 9,
          fullCommitment: 5,
          challenge: 1,
          collaboration: 3,
          respect: 1  
        },
        {
          gifterName: "久保田",
          pride: 9,
          fullCommitment: 5,
          challenge: 1,
          collaboration: 3,
          respect: 1  
        }
      ],
      keyword:{
        name:'なまえ'
      }
    }
    this.onSearch = this.onSearch.bind(this);
    this.onChangeKeyword = this.onChangeKeyword(this);
  }
  

  render() {
    return (
      <Container>
        <Form>
          <Item rounded>
            <Input placeholder='氏名' type="text" onChange={this.onChangeKeyword}/>
            {/* <Input placeholder='氏名' type="text" onChange={this.onChangeKeyword}/> */}
            <Button primary title="search" onPress={this.onSearch}><Text>検索</Text></Button>
          </Item>
        </Form>
        <Content>
          <List>
             {this.state.personList.map(person => (
                <ListItem selected>
                <Left>
                  <Body>
                    <Text>{person.firstName} {person.lastName}</Text>
                    <Text>Pride {person.pride}</Text>
                    <Text>Full-Commitment {person.fullCommitment}</Text>
                    <Text>Challenge {person.challenge}</Text>
                    <Text>Collaboration {person.collaboration}</Text>
                    <Text>Respect {person.respect}</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name="arrow-forward"/>
                  {/* <Icon name="arrow-forward" onPress={this.onPressArrow(event)}/> */}
                </Right>
                </ListItem>
             ))}
          </List>
        </Content>
      </Container>
    );

    // 初期表示時の全件検索
    // this.onSearch();
  }

  onSearch() {
    // API呼び出し
    alert("API呼び出し"+ this.state.keyword.name);
    this.getBadgeGetter()
  }
  onChangeKeyword() {
    alert("キーワード入力");
    // this.setState({
    //   keyword: {
    //     name: 
    //   }
    // });
  }

  //Fetch 社員情報Get
  getBadgeGetter() {
    return fetch('http://13.115.80.59/ULSBadge/gifterlist/')
      .then((response) => response.json())
      .then((responseJson) => {
        // responseJsonをループで回してsetStateでつめる
        // responseJson.map{json => 
        //   this.setState({
        //     firstNameKana: json.firstName,
        //     lastName: "",
        //     firstName: "",
        //     department: "",
        //     employeeNo: "",
        //     pride: null,
        //     fullCommitment: null,
        //     challenge: null,
        //     collaboration: null,
        //     respect: null,
        //     totalBadge: "",
        //     lastNameKana:""
        //   });  
        // }
        this.setState({personList: responseJson})
        alert('成功');
        // return responseJson;
      })
      .catch((error) => {
        alert('失敗');
        alert(error);
      });
  }
  // onPressArrow(){
  //   // native-navigationのメソッドよぶ
  //   this.state.employeeNo
  // }
}

const styles = StyleSheet.create({
  nameLavel: {
    backgroundColor: '#fff',
    fontSize: 14,
  },
});
