 import React,{ Component } from 'react';
 
import CardList from '../components/card_list';
import SearchBox from '../components/search_box';
import Scroll from '../components/Scroll';

class App extends Component  {
	constructor(){
		super()
		this.state={
			robots : [] ,
			searchfield: ''
		}
		
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
		.then(users => this.setState({robots : users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}


	render() {
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robots.length === 0){
			return <h1> Loading </h1>
		}else {
			return (
				<div className = "tc">
					<h1 className="b dim  f1 f2-m f1-l fw2 black-90 mv3"> RoboFriends</h1>
					<h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy"> This is my first <em>React </em> app</h2>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}
}
	
export default App;