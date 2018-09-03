import React from 'react';
import ReactDOM from 'react-dom';
import { Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import App from './components/App';
//import './index.css';

const store = createStore(
	reducers,
	applyMiddleware(thunk)
	);

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ createHistory() }>
			<App />
		</Router>
	</Provider>, document.getElementById('root'));
