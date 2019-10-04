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
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class Dummy extends Component {
  constructor(props) {
    super(props)
  }
  

  render() {
    return (
      <Container>
          <Text>個人用ページ</Text>
      </Container>
    );

  }

}
