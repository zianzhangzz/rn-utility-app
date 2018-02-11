import React, { Component } from 'React'
import { Scene, Router, ActionConst } from 'react-native-router-flux'
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import * as scenes from './js/constants/scene'
// import Index from './js/pages/Index'
import { Provider } from 'react-redux'
import appReducer from './js/reducers';

// import Home from './js/pages/Home'
import Home from './js/pages/Home'
import WebView from './js/components/WebView'
import Music from './js/pages/music/Music'
import News from './js/pages/news/News'
import Numbers from './js/pages/trainings/Numbers'
import Pictures from './js/pages/trainings/Pictures'
import Timer from './js/pages/tools/Timer'
const store = createStore(appReducer, applyMiddleware(ReduxThunk));

export default class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene
              key={scenes.SCENE_INDEX}
              component={Home}
              title="Home"
              type={ActionConst.REPLACE}
              hideNavBar
              initial
              duration={0}
            />
            <Scene
              key={scenes.SCENE_WEB}
              component={WebView}
              title="Webview"
              hideNavBar
            />
            <Scene
              key={scenes.SCENE_NUMBERS}
              component={Numbers}
              title="Numbers"
              hideNavBar
            />    
            <Scene
              key={scenes.SCENE_NEWS}
              component={News}
              title="News"
              hideNavBar
            />
            <Scene
              key={scenes.SCENE_PICTURES}
              component={Pictures}
              title="Pictures"
              hideNavBar
            />       
            <Scene
              key={scenes.SCENE_MUSIC}
              component={Music}
              title="Music"
              hideNavBar
            />                
            <Scene
              key={scenes.SCENE_TIMER}
              component={Timer}
              title="Timer"
              hideNavBar
            />                                                                
          </Scene>
        </Router>
      </Provider>
    )
  }
}

