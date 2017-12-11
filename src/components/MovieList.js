import React from 'react';




class MovieList extends React.Component{

	constructor(props){
		super(props);
		this.state={}

	}

componentWillReceiveProps(nextProps){
	const apiKey = 'c4f6828f';
			const apiUrl = `http://www.omdbapi.com/?t=batman&apikey=${apiKey}`;
			const urlForTitleMovie = title => `http://www.omdbapi.com/?t=${nextProps.titleMovie}&apikey=${apiKey}`;
		
		fetch(urlForTitleMovie(nextProps.titleMovie))
			.then(data => data.json())
			.then(data => {
				this.setState({
					titleMovie: data
				})
			})
}

 	render(){
 			

 		if(!this.state.titleMovie) return <p>Je cherche ...</p>
 		return(
 			<div className="movie__view">
 				<h2 className="movie__title">{this.state.titleMovie.Title}</h2>
 				
 				<div className="movie__content">
				<div className="movie__desc">
 				<p>{this.state.titleMovie.Director}</p>
 				<p>{this.state.titleMovie.Year}</p>
 				<p>{this.state.titleMovie.Genre}</p>
 				<p>{this.state.titleMovie.Contry}</p>
 				<p>{this.state.titleMovie.Awards}</p>
 				<p>{this.state.titleMovie.Language}</p>
 				</div>
 				<div>
 				<img className="movie__img"src={this.state.titleMovie.Poster} alt=""/>
 				</div>
 				</div>
 				
 			</div>

 			)
 	}
 }

export default MovieList;