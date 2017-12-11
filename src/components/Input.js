import React from 'react';


export default class Input extends React.Component{
	constructor(props){
		super(props);
		
	}

	newValue(e){
		let value = e.target.value;
		this.props.value(value)

	}

	render(){
		return(
			<div>
			<input style={{margin:30, padding:20, width: '50%'}}type="text"
			placeholder={this.props.placeholder}
			onChange={this.newValue.bind(this)}/>
			</div>
	)
}
}