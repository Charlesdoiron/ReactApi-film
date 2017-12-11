import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import MovieList from './components/MovieList'
import Input from './components/Input';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      inputValue: "",
      inputAuthor:""
    }
    this.changeTitle = this.changeTitle.bind(this)
    this.changeAuthor = this.changeAuthor.bind(this)
  }

  changeTitle(value){
    this.setState({inputValue : value})
  }
 changeAuthor(value){
    this.setState({inputAuthor : value})
  }

  render() {
    return (
      <div className="App">
        <Input 
        value={this.changeTitle}
        placeholder="Chercher par titre" />

        <MovieList
        titleMovie={this.state.inputValue}
        authorMovie={this.state.inputAuthor}
         />
        
        
      </div>
    );
    }
  }

export default App;
