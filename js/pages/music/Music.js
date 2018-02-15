import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Container, List, ListItem, Thumbnail, Text, Body   } from 'native-base'
import { fetchPlaylistRandom } from '../../actions'

import Header from '../../components/Header'

class Music extends Component {
    state = {}
    componentDidMount () {
        this.props.fetchPlaylistRandom();
    }
    renderAlbums = (albums) => {
      if (!albums) return
      return albums.map(album => {
        return (
          <ListItem>
            <View style={styles.innerContainer}>
              <Thumbnail size={80} source={{uri: album.image[1]['#text']}} />
            </View>
              <Body>
                <Text>{album.name}</Text>
                <Text note>{album.artist.name}</Text>
              </Body>


          </ListItem>

        )
      })
    }
  render() {
    // console.log(this.props.topMusic)
    return (
      <Container>
        <Header title="Music" back={true} themeColor={this.props.themeColor} />
        <ScrollView>
          <View style={styles.container}>
          {this.renderAlbums(this.props.topMusic)}
          </View>
        </ScrollView>
      </Container>
    );
  }
}

function mapStateToProps({ topMusic }) {
    return { topMusic };
  }
const mapDispatchToProps = {
    fetchPlaylistRandom
  }


export default connect(mapStateToProps, mapDispatchToProps)(Music);

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    paddingVertical: 15
  },
  innerContainer: {
    paddingLeft: 15
  }
})