import React from 'react';
import './App.css';
/*import Item from './myItem';*/

class Starwars extends React.Component{
  constructor(state){
    super(state)
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      films: [],
    }
  }
  getNewCharecter(){
    const randomnum = Math.round(Math.random()*82)
    console.log("get new charecter from a button")
    const url = `https://swapi.dev/api/people/${randomnum}/`
    fetch(url)
      .then(response=>response.json())
      .then(data=>{
        console.log(data)
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
    })
  })

  }
  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.height}</p>
        <p><a href={this.state.homeworld}>Homeworld</a></p>
        <ul>
          <li>{this.state.films}</li>
        </ul>
        <button type="button" onClick={()=>this.getNewCharecter()} className="btn">Randomize charecter</button>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Starwars />
      </header>
    </div>
  );
}

export default App;
