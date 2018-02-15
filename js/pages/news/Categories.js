import React, { Component } from 'react';
import { Button, Text, Left, Icon } from 'native-base';
import { View, StyleSheet } from 'react-native';
import {tech, business, general} from '../../constants/news';
import { HEIGHT, WIDTH, getResponsiveHeight } from '../../common/styles'
import { LinearGradient } from 'expo';

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
        <LinearGradient
                colors={['#C3A5D9','#9F86C0','#8E649E']}
                start={{x: 0.3, y: 1.0}} end={{x: 1.0, y: 0.6}}
                style={styles.gradient}
                >
        <View style={styles.container}>
        <Button style={styles.btn} onPress={() => this.changeCate(business)} rounded >
          <Text >Business</Text>
        </Button>  
        <Button style={styles.btn} onPress={() => this.changeCate(tech)} rounded >
          <Text >Tech</Text>
        </Button>  
        <Button style={styles.btn} onPress={() => this.changeCate(general)} rounded >
          <Text >World</Text>
        </Button> 
        <Button style={styles.btn} onPress={this.onFav} rounded>
          <Icon name='heart' />
        </Button> 
        </View>
        </LinearGradient>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: WIDTH-10
  },
  gradient: {
    height: 60,
    width: WIDTH-10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    shadowColor: 'dimgrey',
    shadowRadius: 5,
    shadowOpacity: 0.6,
},
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: WIDTH-10
  },
  btn: {
    margin: 3,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1
  },
  btn2: {
    margin: 3,
    backgroundColor: '#00BCD4'
  },
});