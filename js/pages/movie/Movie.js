import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base'
import { searchMovie } from '../../actions'

import Header from '../../components/Header'

class Movie extends Component {
    state = {}
    componentDidMount () {
        this.props.searchMovie()
    }

  render() {
    return (
      <Container>
        <Header title="Movie" back={true} themeColor={this.props.themeColor} />
      </Container>
    );
  }
}


const mapDispatchToProps = {
  searchMovie
}

export default connect(null, mapDispatchToProps)(Movie);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})