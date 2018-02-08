import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Button
} from 'react-native'
import Category from './Category'
import { HEIGHT, getResponsiveHeight } from '../common/styles'
import TabNavigator from 'react-native-tab-navigator'
import { Icon } from 'native-base'
import Home from './Home'

export default class Index extends Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  state = {
    selectedTab: 'home',
  }

  icons = {
    home: {
      default: (
        <Icon
          style={styles.image}
          name='ios-home-outline'
        />
      ),
      selected: <Icon style={styles.blue} name='ios-home'/>
    },
    message: {
      default: (
        <Icon
        style={styles.image}
        name='ios-list-box-outline'
      />
      ),
      selected: <Icon style={styles.cyan} name='ios-list-box'/>
    },
    wormhole: {
      default: (
        <Icon
        style={styles.image}
        name='ios-paper-plane-outline'
      />
      ),
      selected: <Icon style={styles.teal} name='ios-paper-plane'/>
    }
  }

  render() {
    return (
      <View style={styles.tabs_container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => this.icons.home.default}
            renderSelectedIcon={() => this.icons.home.selected}
            onPress={() => this.setState({ selectedTab: 'home' })}
          >
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'category'}
            title="Category"
            renderIcon={() => this.icons.message.default}
            renderSelectedIcon={() => this.icons.message.selected}
            onPress={() => this.setState({ selectedTab: 'category' })}
          >
            <Category />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'wormhole'}
            title="App"
            renderIcon={() => this.icons.wormhole.default}
            renderSelectedIcon={() => this.icons.wormhole.selected}
            onPress={() => this.setState({ selectedTab: 'wormhole' })}
          >
            <Category />
            </TabNavigator.Item>
        </TabNavigator>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  tabs_container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  image: {
    color: 'grey',
    backgroundColor: 'transparent'
  },
  blue: {
    color: '#03A9F4'
  },
  cyan: {
    color: '#00BCD4'
  },
  teal: {
    color: '#009688'
  }    
})
