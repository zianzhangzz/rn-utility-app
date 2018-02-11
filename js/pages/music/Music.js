import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, List, ListItem, Thumbnail, Text, Body   } from 'native-base'
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
            <Thumbnail size={80} source={{uri: album.image[1]['#text']}} />
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
        <Content padder>
          <List></List>
            {this.renderAlbums(this.props.topMusic)}
        </Content>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})