import React, { Component } from 'react'
import { Container, Content, Footer, Text, Button, Badge } from 'native-base'
import { StyleSheet, View } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Header from '../../components/Header'
import { setInterval } from 'core-js/library/web/timers'

          {/* <Text>
            This is Game training the sense of numbers
            I can choose the length of digits 
            each digits is 0-9
            thousand and decimal separator
            button to generate random numbers
            button to toggle visibility
            auto play
            speed
            multiple number rows
          </Text> */}
          
export default class Numbers extends Component {
    state = {
        size: 6,
        number: 0,
        show: true,
        comma: true,
        speed: 20,
        auto: false,
        autoInstance: null
    }
    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    toggleComma = () => {
        this.setState({
            comma: !this.state.comma
        })
    }
    generateNumber = () => {
        //for size of 4, range is [1000, 9999]
        let size = this.state.size
        let max = Math.pow(10, size) - 1
        let min = Math.pow(10, size-1)
        let num = Math.floor(Math.random()*(max-min) + min)
        if (this.state.comma) {
            num = this.numberWithCommas(num)
        }
        this.setState({
            number: num
        }) 
    }
    getNumSize = () => {
        // an dropdown to select the size of the number
    }
    toggleVisibility = () => {
        this.setState({
            show: !this.state.show
        })
    }
    autoPlay = (speed) => {
        this.state.autoInstance = setInterval(() => {
            this.generateNumber()
        }, speed*100);
    }
    toggleAuto = () => {
        if (this.state.auto) {
            clearInterval(this.state.autoInstance)
            this.setState({
                number: 0
            })
        } else {
            this.autoPlay(this.state.speed)
        }
        this.setState({
            auto: !this.state.auto
        })
    }
    plus = () => {
        this.setState({
            size: this.state.size + 1
        })        
    }
    minus = () => {
        this.setState({
            size: this.state.size - 1
        })        
    }
    slower = () => {
        if (this.state.auto) {
            clearInterval(this.state.autoInstance)
            this.autoPlay(this.state.speed + 5)
        }
        this.setState({
            speed: this.state.speed + 5
        })        
    }
    faster = () => {
        if (this.state.auto) {
            clearInterval(this.state.autoInstance)
            this.autoPlay(this.state.speed - 5)
        }
        this.setState({
            speed: this.state.speed - 5
        })      
    }        
  render() {
      
    return (
      <Container>
        <Header title="Numbers" back={true} themeColor={this.props.themeColor} />
            <Grid>
                <Row style={styles.numContainer} size={6}>
                    <Text style={styles.number}>{this.state.show ? this.state.number: null}</Text>
                </Row>
                <Row style={styles.btnContainer} size={2}>
                    <Button info rounded onPress={this.generateNumber}>
                        <Text>Random</Text>
                    </Button>
                    <Button info rounded onPress={this.toggleVisibility}>
                        <Text>{this.state.show ? 'Hide' : 'Show'}</Text>
                    </Button>                    
                    <Button info rounded onPress={this.toggleAuto}>
                        <Text>{this.state.auto ? 'Stop' : 'Auto'}</Text>
                    </Button>                    
                    <Button info rounded onPress={this.toggleComma}>
                        <Text>{this.state.comma ? 'No Comma' : 'Comma'}</Text>
                    </Button>
                </Row>
                <Row style={styles.btnContainer2} size={2}>
                    <Col style={styles.btnContainer}>
                        <Button info rounded onPress={this.minus}>
                            <Text>-</Text>
                        </Button>
                        <Button transparent>
                            <Badge warning>
                                <Text>{this.state.size}</Text>
                            </Badge>
                        </Button>
                        <Button info rounded onPress={this.plus}>
                            <Text>+</Text>
                        </Button>       
                    </Col>
                    <Col style={styles.btnContainer}>
                        <Button info rounded onPress={this.faster}>
                            <Text>-</Text>
                        </Button>
                        <Button transparent>
                            <Badge warning>
                                <Text>{this.state.speed/10}</Text>
                            </Badge>
                        </Button>
                        <Button info rounded onPress={this.slower}>
                            <Text>+</Text>
                        </Button>                    
                    </Col>
                </Row>
            </Grid>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
    numContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    btnContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },    
    btnContainer3: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },        
    number: {
        fontSize: 40,
        fontWeight: '700'
    }

})