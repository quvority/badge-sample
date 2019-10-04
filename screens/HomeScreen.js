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
      // gifter:
      //   {
      //     gifterName: "桑原",
      //     pride: 5,
      //     fullCommitment: 2,
      //     challenge: 1,
      //     collaboration: 0,
      //     respect: 1  
      //   }

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
      ]
    }
  }
  

  render() {
    return (
      <Container>
        <Form>
          <Item rounded>
            <Input placeholder='氏名'/>
            <Button primary title="search" on-press={this.onSearch}><Text>検索</Text></Button>
          </Item>
        </Form>
        <Content>
          <List>
             {this.state.gifterList.map(gifter => (
                <ListItem selected>
                <Left>
                  <Body>
                    <Text>{gifter.gifterName}</Text>
                    <Text>Pride {gifter.pride}</Text>
                    <Text>Full-Commitment {gifter.fullCommitment}</Text>
                    <Text>Challenge {gifter.challenge}</Text>
                    <Text>Collaboration {gifter.collaboration}</Text>
                    <Text>Respect {gifter.respect}</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
                </ListItem>
             ))}
          </List>
        </Content>
      </Container>
    );
  }

  onSearch() {
    // API呼び出し

    // 呼び出し結果をセット
    // this.setState({
    //   gifter: {
    //     gifterName: null,
    //     pride: null,
    //     fullCommitment: null,
    //     challenge: null,
    //     collaboration: null,
    //     respect: null
    //   }
    // })
  }
}

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={styles.contentContainer}>
//         <View style={styles.welcomeContainer}>
//           <Text>aaa</Text>
//           <Image
//             source={
//               __DEV__
//                 ? require('../assets/images/robot-dev.png')
//                 : require('../assets/images/robot-prod.png')
//             }
//             style={styles.welcomeImage}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// HomeScreen.navigationOptions = {
//   header: null,
// };

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  nameLavel: {
    backgroundColor: '#fff',
    fontSize: 14,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
