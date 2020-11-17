import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import InfiniteScroll from './components/InfiniteScroll';
import VariableFont from './components/VariableFont';

const App = () => (
	<Router>
		<nav>
			<ul>
				<li>
					<Link to="/infinite-scroll">Infinite Scroll</Link>
				</li>
				<li>
					<Link to="/variable-font">Variable Font</Link>
				</li>
			</ul>
		</nav>

		<main>
			<Switch>
				<Route path="/infinite-scroll">
					<p>Infinite scroll</p>
				</Route>
				<Route path="/variable-font">
					<VariableFont />
				</Route>
			</Switch>
		</main>
	</Router>
);

export default App;
