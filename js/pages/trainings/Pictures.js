import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content, Segment, Button, Text, Icon } from 'native-base'
import { HEIGHT, getResponsiveHeight } from '../../common/styles'
import Header from '../../components/Header'
import { fetchRandomPic, fetchFavPic } from '../../actions'
import { connect } from 'react-redux'
import Picture from '../../components/Picture'

{/* <Text>
This is Pictures app for visual-spatial, aesthetic leisure and training
get random pics
search with keywords
add to favorite collection
</Text> */}

class Pictures extends Component {

    
    state = {
        active: true,
        isFav: false
    }
    componentDidMount () {
        this.props.fetchRandomPic();
    }
    renderPics = (pics) => {
        return pics.map(pic => {
            return <Picture key={pic.id} data={pic} isFav={this.state.isFav}/>
        })
    }
    onRandom = () => {
        this.props.fetchRandomPic();
    }
    // important props of a pic: urls,  updated_at, id, links
    onFav = () => {
        this.setState({
            active: false,
            isFav: true
        })
        this.props.fetchFavPic()
    }
    onBrowse = () => {
        this.setState({
            active: true,
            isFav: false
        })
        this.props.fetchRandomPic();
        
    }
  render() {
    return (
      <Container>
          <Content>
          <Header title="Gallery" back={true} hasTabs/>
          <View style={styles.container}>
                <Button style={styles.btnTab} onPress={this.onBrowse} active={this.state.active} >
                    <Icon name="md-images"/>
                    <Text>Browse</Text>
                  </Button>
                  <Button style={styles.btnTab} onPress={this.onFav} active={!this.state.active} >
                  <Icon name="md-heart"/>
                      <Text>Favorite</Text>
                  </Button>
          </View>

        <View style={styles.picContainer}>
            {this.renderPics(this.props.pictures)}
        </View>

        </Content> 
          <View>
                <Button
                style={styles.btn}
                onPress={this.onRandom}>
                <Icon name="md-refresh" style={{fontSize: 40}} />
            </Button>
            </View>
              
      </Container>
    );
  }
}
const mapStateToProps = ({pictures}) => {
    return {pictures}
  }
  
  const mapDispatchToProps = {
    fetchRandomPic,
    fetchFavPic
  }

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);
  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    picContainer: {
        marginBottom: 10
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8BC34A',
        borderRadius: 50,
        width: 60,  
        height: 60,   
        position: 'absolute',                                          
        bottom: 25,                                                    
        right: 20, 
        zIndex: 99,
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        opacity: 0.8
    },
    btnTab: {
        backgroundColor: '#8BC34A',
        marginLeft: 10,
        marginTop: 10,
        
    }
})