import React, { Component } from 'react'
import { Container, Content, Footer, Text } from 'native-base'
import Header from '../../components/Header'

export default class Pictures extends Component {
    state = {}
    componentDidMount () {
    }
  render() {
    return (
      <Container>
        <Header title="Pictures" back={true} />
        <Content padder>
          <Text>
            This is Pictures app for visual-spatial, aesthetic leisure and training
            get random pics
            search with keywords
            add to favorite collection
          </Text>

        </Content>
        <Footer />
      </Container>
    );
  }
}