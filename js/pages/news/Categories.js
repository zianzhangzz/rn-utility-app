import React, { Component } from 'react';
import { Button, Text, Left, Icon } from 'native-base';
import { View, StyleSheet } from 'react-native';
import {tech, business, general} from '../../constants/news';
import { HEIGHT, WIDTH, getResponsiveHeight } from '../../common/styles'

export default class Categories extends Component {

  // changeSite = (name, apiName) => {
  //   let news =  this.props.fetchTopNews(apiName);
  //   this.setState({site: apiName, siteName: name});
  // }
  state = {
    category: null,
    show: false
  }
  renderCate = (categories) => {
    if (!this.state.show) return
    return categories.map((category, i) => {
      return (
      <Button 
        rounded
        style={styles.btn2} 
        key={category.name} 
        onPress={() => this.onChangeSite(category.name, category.apiName) }>
          <Text>{category.name}</Text>
      </Button>
      )
    })
  } 
  onChangeSite = (name, apiName) => {
    this.props.changeSite(name, apiName)
    this.toggleShow()
  }
  toggleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  changeCate = (newCategory) => {
    if (this.state.category === newCategory) {
      this.toggleShow()
      return
    }
    this.setState({
      category: newCategory,
      show: true
    })

  }
  onFav = () => {
    this.props.fetchFav()
    this.props.onFav()
    this.setState({
      show: false
    })
  }
  render() {
    
    return (
      <View>
        <View style={styles.container2}>
          { this.renderCate(this.state.category) }
        </View>        
        <View style={styles.container}>
        <Button style={styles.btn} onPress={() => this.changeCate(business)} rounded info>
          <Text >Business</Text>
        </Button>  
        <Button style={styles.btn} onPress={() => this.changeCate(tech)} rounded success>
          <Text >Technology</Text>
        </Button>  
        <Button style={styles.btn} onPress={() => this.changeCate(general)} rounded warning>
          <Text >World</Text>
        </Button> 
        <Button style={styles.btn} onPress={this.onFav} rounded danger>
          <Icon name='heart' />
        </Button> 
        </View>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 15,
    width: WIDTH-10
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: WIDTH-10
  },
  btn: {
    margin: 3
  },
  btn2: {
    margin: 3,
    backgroundColor: '#00BCD4'
  },
});