import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo';

export default class Card extends Component {
    state = {colors:['#F44336']}
    //get icon name, title, description, routing from parent
    createColors(color, num) {
        //receive hex color from parent, return array of colors for gradient
        //num is # of generated color in return array
        let a = []
        let red = parseInt( color.substring(1, 3), 16)
        let green = parseInt(color.substring(3, 5), 16)
        let blue = parseInt(color.substring(5,7), 16)
        
        let k = 0.8 
        //from lighter colder to darker warmer
        // console.log(red, green, blue)
        for (i=0;i<num;i++) {
            let new_red = (Math.floor(red*k)).toString(16)
            let new_green =  (Math.floor(green*k)).toString(16)
            let new_blue =  (Math.floor(blue*k)).toString(16)
            let new_color = '#'+new_red+new_green+new_blue
            k += 0.1
            a.push(new_color)
        }
        return a

    }
    // componentWillMount() {
    //     this.setState({colors: this.createColors(this.props.color, 3)})
        
    // }
  render() {
      const {title, colors} = this.props;
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress} style={styles.buttonContainer}>
        
            <LinearGradient
                colors={colors}
                start={{x: 0.3, y: 1.0}} end={{x: 1.0, y: 0.6}}
                style={styles.gradient}
                >
                    <Text style={styles.buttonText}>{title}</Text>

            </LinearGradient>
            </TouchableOpacity>
            </View>
    );
  }
}
// <Text>Icon</Text>
// <Text>description</Text>
// <Text>Footer</Text>
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    gradient: {
        height: 100,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        shadowColor: 'grey',
        shadowRadius: 5,
        shadowOpacity: 0.6,
    },
    buttonContainer: {
        width: 150,
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        padding: 15,
        marginLeft: 1,
        marginRight: 1,
        width: 150
    }
})



