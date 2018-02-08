import React, { Component } from 'react'
import { Container, Content, Footer, Card, CardItem, Body, Text, Icon, Button, Badge } from 'native-base'
import { StyleSheet, View, TouchableHighlight, Picker, Modal } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'

import Header from '../../components/Header'


{/* <Text>
This is Timer/Stopwatch app for tracking time
</Text> */}
export default class Pictures extends Component {
    state = {
        mode: 'Timer',
        start: false,
        time: 1800,
        instance: null
    }
    componentDidMount () {
    }

    autoPlay = () => {
      this.state.instance = setInterval(() => {
          this.counter()
      }, 1000);
  }
  timeConvert = (time) => {
    const hour = Math.floor(time/3600)
    const remainder = time%3600
    const min = Math.floor(remainder/60)
    const sec = remainder%60
    
    let show, addZero='', addZeroMin=''
    if (sec < 10) {
      addZero = '0'
    }
    if (hour === 0) {
      show = min+' : '+addZero+sec
    } else {
      if (min < 10) {
        addZeroMin = '0'
      }
      show = hour+' : '+addZeroMin+min+' : '+addZero+sec
    }
    return show
  }
  counter = () => {
    if (this.state.mode === 'Timer') {
      this.setState({
        time: this.state.time - 1
      }) 
    } else {
      this.setState({
        time: this.state.time + 1
      }) 
    }
}
    toggleStart = () => {
      if (this.state.start) {
          clearInterval(this.state.instance)
      } else {
          this.autoPlay()
      }
      this.setState({
          start: !this.state.start
      })
  }

  toggleFunction = () => {
    clearInterval(this.state.instance)
    if (this.state.mode === 'Timer') {
      this.setState({
        mode: 'Stopwatch',
        time: 0,
        start: false
      })
      return 
    } 
      this.setState({
        mode: 'Timer',
      time: 1800,
      start: false
    })
  }

  clear = () => {
    clearInterval(this.state.instance)
    if (this.state.mode === 'Timer') {
      this.setState({
        time: 1800,
        start: false
      })
      return 
    } 
    this.setState({
      time: 0,
      start: false
    })
  }

  longer = () => {
      this.setState({
          time: this.state.time + 300
      })        
  }
  shorter = () => {
      this.setState({
          time: this.state.time - 300
      })      
  }  
  render() {
    return (
      <Container>
        <Header title={this.state.mode} back={true} />
          <Grid>
                <Row size={1}/>
                <Row style={styles.numContainer} size={5}>

                <Col style={styles.numCol} size={2}>
                  { this.state.mode === 'Timer' && !this.state.start ?
                        <Button style={styles.btn2}  onPress={this.shorter}>
                          <Icon name="md-remove" style={styles.number}></Icon>
                        </Button>
                        :null}    
                </Col>
                 <Col style={styles.numCol} size={7}>
                  <Text style={styles.number}>
                    {this.timeConvert(this.state.time)}
                  </Text>
                </Col>

                 <Col style={styles.numCol2} size={2}>
                { this.state.mode === 'Timer' && !this.state.start ?
                    <Button style={styles.btn2} onPress={this.longer}>
                        <Icon name="md-add" style={styles.number}></Icon>
                    </Button>
                    :null}      
                </Col> 
                </Row>

                <Row style={styles.btnContainer} size={2}>

                <Button onPress={this.toggleStart} style={styles.btn}>
                        {this.state.start ? 
                          <Icon name="md-pause" style={{fontSize: 50}} />:
                          <Icon name="md-play"  style={{fontSize: 50}}/>
                        }
                    </Button>   

                    <Button large success onPress={this.clear} style={styles.btn}>
                        <Icon name="md-refresh" style={{fontSize: 50}} />
                    </Button>  

                    <Button large success onPress={this.toggleFunction} style={styles.btn}>
                      {this.state.mode === 'Timer' ? 
                        <Icon name="md-timer" style={{fontSize: 50}} />:
                        <Icon name="md-stopwatch"  style={{fontSize: 50}}/>
                      }
                    </Button>        
                </Row>
                <Row size={1}/>
                
            </Grid>
      </Container>
            
    );
  }
}

const styles = StyleSheet.create({
  numContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'lightgrey',
      borderWidth: 1,
      borderRadius: 3,
      shadowColor: 'grey',
      shadowRadius: 5,
      shadowOpacity: 0.5,
      margin: 15,
      backgroundColor: '#FFC107',
    
  },
  btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 35
  },
  number: {
      fontSize: 40,
      color: 'white',
      fontWeight: '700'
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'grey',
    shadowRadius: 2,
    shadowOpacity: 0.8,
    borderRadius: 50,
    backgroundColor: '#FFC107',
    height: 80,
    width: 80
  },
  btn2: {
    height: 80,
    width: 80,
    borderRadius: 50,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  numCol: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  numCol2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },

})