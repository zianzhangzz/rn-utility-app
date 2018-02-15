import React, { Component } from 'react';
import { View,  Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

   
class CardList extends Component {
    state = {  }

    render() {
        return (
            <View style={styles.container}>
            {
              this.props.data.map((u, i) => {
                return (
                  <TouchableOpacity key={u.Title}>
                  <Card>
                    <CardItem cardBody>
                      <Image source={{uri: u.Poster}} style={{height: 350, width: 300, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                          <Text>{u.Title}</Text>
                      </Body>
                      <Right>
                        <Text>{u.Year}</Text>
                      </Right>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                );
              })
            }
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 80,
    paddingHorizontal: 15,
  }

  })
  
export default CardList;
