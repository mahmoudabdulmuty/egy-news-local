import React from 'react';
import './App.css';
import Article from './components/Article';
import data from './data';

class App extends React.Component {
	state = {
		articles: data
	};
	render() {
		return (
			<>
				<header className="header">
					<h1 className="header-title">أخبار مصر</h1>
				</header>
				<div className="app">
					<Article articles={this.state.articles} />
				</div>
			</>
		);
	}
}
export default App;
