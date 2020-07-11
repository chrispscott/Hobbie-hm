import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Hobbies'

function App() {
  return (
    <div className="App">
      <Card  
      hobby= 'Videogames'
      img = 'https://images.theconversation.com/files/326352/original/file-20200408-108521-bnsblv.jpg?ixlib=rb-1.1.0&rect=48%2C54%2C4537%2C3389&q=45&auto=format&w=496&fit=clip'
      details= 'playing games online'
      />
      <Card  
      hobby= 'Eating'
      img = 'https://cdm0lfbn.cloudimg.io/v7/_origin_/image_uploader/photos/bc/original/finding-the-best-burgers-in-verbier-verbier-valley.jpg?p=large'
      details= 'TRYING Different PLACES TO EAT'
      />
      <Card  
      hobby= 'Love for animals'
      img = 'https://pyxis.nymag.com/v1/imgs/46a/58b/8e86d1f7f847dbca2754809947686d6a27-cats-performances-ranking.rhorizontal.w700.jpg'
      details= 'Watching cat videos chilling with my dog'
      />

    </div>
  );
}

export default App;


