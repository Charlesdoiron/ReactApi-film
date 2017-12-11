import React from 'react';


export default class Button extends React.Component{
	constructor(props){
		super(props);
		this.displayMovie = this.displayMovie.bind(this)
	}

	displayMovie(){
		console.log('test');
	
	}
	


	render(){

		return(
			<div>
				<button 
				onClick={this.displayMovie}
				style={{margin: 50}}
				>Afficher les films
				</button>
			</div>
	)
}
}