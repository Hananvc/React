import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {originals,action, Documentaries, horror} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={action} title='Action Movies'  />
      <Rowpost url={horror} title='Horror Movies' isSmall />
      <Rowpost url={originals} title='Netflix Originals' isSmall  />
      <Rowpost url={Documentaries} title='Documentaries' isSmall  />
    </div>
  );
}

export default App;
