import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Header from './Header';
import ListItem from './ListItem';
import ItemVue from './ItemVue';

class App extends React.Component {
  render() {
	return (
		<div className="app">
			<Router>
				<div>
					<Header/>
					<Route exact path='/' component={ListItem}/>
					<Route exact path='/item/:name' component={ItemVue}/>
				</div>
			</Router>
        </div>
    );
  }
}

export default App;
