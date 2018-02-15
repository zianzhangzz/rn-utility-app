import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { searchMovie } from '../../actions'

import Header from '../../components/Header'
import CardList from '../../components/CardList'

class Movie extends Component {
    state = {}
    componentDidMount () {
        this.props.searchMovie()
    }

  render() {
    return (
      <View>
        <Header title="Movie" back={true} themeColor={this.props.themeColor} />
          <ScrollView>
            <CardList data={this.props.movie}/>
          </ScrollView>
      </View>
    );
  }
}


const mapDispatchToProps = {
  searchMovie
}

function mapStateToProps({ movie }) {
  return { movie };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})