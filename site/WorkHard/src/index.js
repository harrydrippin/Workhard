import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
);
