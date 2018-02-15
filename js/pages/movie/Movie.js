import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { searchMovie } from '../../actions'

import Header from '../../components/Header'
import CardList from '../../components/CardList'
import SearchBox from '../../components/SearchBox';

class Movie extends Component {
    state = {defalt: 'time', movie: []}
    componentDidMount () {
      this.props.searchMovie(this.state.defalt)
    }
    onSearchWord = async (keyword) => {
      const movie = await this.props.searchMovie(keyword)
      this.setState({movie})
    }
    onClear = () => {
        this.setState({movie: []})
    }
  render() {
    return (
      <View>
        <Header title="Movie" back={true} themeColor={this.props.themeColor} />
        <SearchBox search={this.onSearchWord} onClear={this.onClear}/>
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