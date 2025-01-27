import './App.css';
import React from 'react';


function App() {
  React.useEffect(() => {
    fetch("/movies")
    .then((r) => r.json())
    .then((movies)=> console.log(movies))
  })
  return (
    <h1>Check console for a list of movies</h1>
  );
}

export default App;
